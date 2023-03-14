/*
 * Copyright 2023 Google LLC
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {ModelDef} from '@malloydata/malloy';
import * as fn from './functions';

const funcs = [
  fn.CONCAT,
  fn.STDDEV,
  fn.ROUND,
  fn.FLOOR,
  fn.UPPER,
  fn.LOWER,
  fn.SUBSTR,
  fn.REGEXP_EXTRACT,
  fn.REPLACE,
  fn.LENGTH,
];

let BIGQUERY_FUNCTIONS_FILE: string;
export function resolve(url: URL): string {
  if (url.toString() === 'malloy://bigquery_functions') {
    BIGQUERY_FUNCTIONS_FILE ||= JSON.stringify({
      contents: Object.fromEntries(funcs.map(f => [f.name, f])),
      exports: funcs.map(f => f.name),
      name: 'malloy-lib-bigquery-functions',
    } as ModelDef);
    return BIGQUERY_FUNCTIONS_FILE;
  }
  throw new Error(`No such file '${url}' in malloy standard library.`);
}