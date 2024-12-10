import type { ParamMap } from "./types";

import createParams from "./createParams";

export default function getParams(
  params?: string | URLSearchParams | ParamMap | null
): string {
  if (params == undefined || params === null) {
    return "";
  }

  if (typeof params !== "string") {
    params = params instanceof URLSearchParams ? params : createParams(params);
    params = params.toString();
  }

  return params.length > 0 ? "?" + params : "";
}
