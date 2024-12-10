import type { UseQueryResult } from "react-query";

export type ReactQueryResult<T, V = T> = {
  status: string;
  data?: T;
  result?: UseQueryResult<V, null>;
};
