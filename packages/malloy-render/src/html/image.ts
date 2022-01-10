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

import { DataColumn } from "@malloy-lang/malloy";
import { Renderer } from "../renderer";

export class HTMLImageRenderer implements Renderer {
  async render(data: DataColumn): Promise<string> {
    if (!data.isString()) {
      return "Invalid field for Image renderer";
    }

    if (data.isNull()) {
      return "∅";
    }

    return `<img src="${data.value}">`;
  }
}