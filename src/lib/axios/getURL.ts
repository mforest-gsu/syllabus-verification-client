import type { ParamMap } from "./types";
import getParams from "./getParams";

const url = import.meta.env.VITE_API_URL;

export default function getURL(
  uri: string,
  params?: string | URLSearchParams | ParamMap | null
): string {
  return (
    (url.slice(-1) === "/" ? url.slice(0, -1) : url) +
    (uri.slice(0, 1) !== "/" ? `/${uri}` : uri) +
    getParams(params)
  );
}
