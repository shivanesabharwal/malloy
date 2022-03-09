/*
 * Copyright 2021 Google LLC
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2 as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 */

import { indent } from "../model/utils";
import {
  DateTimeframe,
  Dialect,
  DialectExpr,
  DialectFieldList,
  ExtractDateTimeframe,
  FunctionInfo,
  isDateTimeframe,
  TimestampTimeframe,
} from "./dialect";

const castMap: Record<string, string> = {
  number: "double precision",
  string: "varchar",
};

export class DuckDBDialect extends Dialect {
  name = "duckdb";
  defaultNumberType = "DOUBLE";
  udfPrefix = "pg_temp.__udf";
  hasFinalStage = false;
  stringTypeName = "VARCHAR";
  divisionIsInteger = true;
  functionInfo: Record<string, FunctionInfo> = {};

  quoteTableName(tableName: string): string {
    return `${tableName}`;
  }

  sqlGroupSetTable(groupSetCount: number): string {
    return `CROSS JOIN GENERATE_SERIES(0,${groupSetCount},1) as group_set`;
  }

  sqlAnyValue(groupSet: number, fieldName: string): string {
    return `MAX(${fieldName})`;
  }

  mapFields(fieldList: DialectFieldList): string {
    return fieldList
      .map(
        (f) =>
          `\n  ${f.sqlExpression}${
            f.type == "number" ? `::${this.defaultNumberType}` : ""
          } as ${f.sqlOutputName}`
        //`${f.sqlExpression} ${f.type} as ${f.sqlOutputName}`
      )
      .join(", ");
  }

  sqlAggregateTurtle(
    groupSet: number,
    fieldList: DialectFieldList,
    orderBy: string | undefined,
    limit: number | undefined
  ): string {
    let tail = "";
    if (limit !== undefined) {
      tail += `[1:${limit}]`;
    }
    const fields = this.mapFields(fieldList);
    // return `(ARRAY_AGG((SELECT __x FROM (SELECT ${fields}) as __x) ${orderBy} ) FILTER (WHERE group_set=${groupSet}))${tail}`;
    return `TO_JSONB((ARRAY_AGG((SELECT TO_JSONB(__x) FROM (SELECT ${fields}\n  ) as __x) ${orderBy} ) FILTER (WHERE group_set=${groupSet}))${tail})`;
  }

  sqlAnyValueTurtle(groupSet: number, fieldList: DialectFieldList): string {
    const fields = fieldList
      .map((f) => `${f.sqlExpression} as ${f.sqlOutputName}`)
      .join(", ");
    return `ANY_VALUE(CASE WHEN group_set=${groupSet} THEN STRUCT(${fields}))`;
  }

  sqlAnyValueLastTurtle(name: string, sqlName: string): string {
    return `(ARRAY_AGG(${name}__0) FILTER (WHERE group_set=0 AND ${name}__0 IS NOT NULL))[1] as ${sqlName}`;
  }

  sqlCoaleseMeasuresInline(
    groupSet: number,
    fieldList: DialectFieldList
  ): string {
    const fields = this.mapFields(fieldList);
    return `TO_JSONB((ARRAY_AGG((SELECT __x FROM (SELECT ${fields}) as __x)) FILTER (WHERE group_set=${groupSet}))[1])`;
  }

  sqlUnnestAlias(
    source: string,
    alias: string,
    fieldList: DialectFieldList,
    needDistinctKey: boolean
  ): string {
    if (needDistinctKey) {
      // return `UNNEST(ARRAY(( SELECT AS STRUCT GENERATE_UUID() as __distinct_key, * FROM UNNEST(${source})))) as ${alias}`;
      return `LEFT JOIN UNNEST(ARRAY((SELECT jsonb_build_object('__distinct_key', gen_random_uuid()::text)|| __xx::jsonb as b FROM  JSONB_ARRAY_ELEMENTS(${source}) __xx ))) as ${alias} ON true`;
    } else {
      // return `CROSS JOIN LATERAL JSONB_ARRAY_ELEMENTS(${source}) as ${alias}`;
      return `LEFT JOIN JSONB_ARRAY_ELEMENTS(${source}) as ${alias} ON true`;
    }
  }

  sqlSumDistinctHashedKey(sqlDistinctKey: string): string {
    // return `('x' || MD5(${sqlDistinctKey}::varchar))::bit(64)::bigint::DECIMAL(65,0)  *18446744073709551616 + ('x' || SUBSTR(MD5(${sqlDistinctKey}::varchar),17))::bit(64)::bigint::DECIMAL(65,0)`;
    return `(
      SELECT
     0::HUGEINT + sum(10::HUGEINT^rr::hugeint * CASE WHEN f >= 'a' THEN ord(f)- ord('a') ELSE  ord(f) - ord('0') END) + 4
     FROM (SELECT f, row_number() over () as rr FROM (SELECT UNNEST(STR_SPLIT(MD5(${sqlDistinctKey})[1:16],'')) f) as x)
    )`;
  }

  sqlGenerateUUID(): string {
    return `GEN_RANDOM_UUID()`;
  }

  sqlFieldReference(
    alias: string,
    fieldName: string,
    fieldType: string,
    isNested: boolean
  ): string {
    let ret = `${alias}->>'${fieldName}'`;
    if (isNested) {
      switch (fieldType) {
        case "string":
          break;
        case "number":
          ret = `(${ret})::double precision`;
          break;
        case "struct":
          ret = `(${ret})::jsonb`;
          break;
      }
      return ret;
    } else {
      return `${alias}.${fieldName}`;
    }
  }

  sqlUnnestPipelineHead(): string {
    return "JSONB_ARRAY_ELEMENTS($1)";
  }

  sqlCreateFunction(id: string, funcText: string): string {
    return `CREATE FUNCTION ${id}(JSONB) RETURNS JSONB AS $$\n${indent(
      funcText
    )}\n$$ LANGUAGE SQL;\n`;
  }

  sqlCreateFunctionCombineLastStage(lastStageName: string): string {
    return `SELECT JSONB_AGG(__stage0) FROM ${lastStageName}\n`;
  }

  sqlSelectAliasAsStruct(alias: string): string {
    return `ROW(${alias})`;
  }
  // TODO
  sqlMaybeQuoteIdentifier(identifier: string): string {
    return identifier;
  }

  // The simple way to do this is to add a comment on the table
  //  with the expiration time. https://www.postgresql.org/docs/current/sql-comment.html
  //  and have a reaper that read comments.
  sqlCreateTableAsSelect(_tableName: string, _sql: string): string {
    throw new Error("Not implemented Yet");
  }

  sqlDateTrunc(expr: unknown, timeframe: DateTimeframe): DialectExpr {
    return [`DATE_TRUNC('${timeframe}', `, expr, `)::date`];
  }

  sqlTimestampTrunc(
    expr: unknown,
    timeframe: TimestampTimeframe,
    _timezone: string
  ): DialectExpr {
    if (timeframe === "date") {
      return [`(`, expr, `)::date`];
    } else if (isDateTimeframe(timeframe)) {
      return [`DATE_TRUNC('${timeframe}', `, expr, `)::date`];
    } else {
      return [`DATE_TRUNC('${timeframe}', `, expr, `)`];
    }
  }

  sqlExtractDateTimeframe(
    expr: unknown,
    timeframe: ExtractDateTimeframe
  ): DialectExpr {
    return [`EXTRACT(${timeframe} FROM `, expr, ")"];
  }

  sqlDateCast(expr: unknown): DialectExpr {
    return ["(", expr, ")::date"];
  }

  sqlTimestampCast(expr: unknown): DialectExpr {
    return ["(", expr, ")::timestamp"];
  }

  sqlDateAdd(
    op: "+" | "-",
    expr: unknown,
    n: unknown,
    timeframe: DateTimeframe
  ): DialectExpr {
    return ["(", expr, ")", op, "(", n, ` * interval '1 ${timeframe}')`];
  }

  sqlTimestampAdd(
    op: "+" | "-",
    expr: unknown,
    n: unknown,
    timeframe: DateTimeframe
  ): DialectExpr {
    return ["(", expr, ")", op, "(", n, ` * interval '1 ${timeframe}')`];
  }

  sqlCast(expr: unknown, castTo: string, _safe: boolean): DialectExpr {
    return ["(", expr, `)::${castMap[castTo] || castTo}`];
  }

  sqlLiteralTime(
    timeString: string,
    type: "date" | "timestamp",
    _timezone: string
  ): string {
    if (type === "date") {
      return `DATE('${timeString}')`;
    } else if (type === "timestamp") {
      return `TIMESTAMP '${timeString}'`;
    } else {
      throw new Error(`Unknown Liternal time format ${type}`);
    }
  }

  getFunctionInfo(_functionName: string): FunctionInfo | undefined {
    return undefined;
  }
}