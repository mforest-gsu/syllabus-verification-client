import type { AxiosHeaders, Method } from "axios";

export type {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  RawAxiosRequestHeaders,
} from "axios";

export type MethodsHeaders = Partial<
  {
    [Key in Method as Lowercase<Key>]: AxiosHeaders;
  } & { common: AxiosHeaders }
>;

export type ParamMap = {
  readonly [k: string]: string | null | undefined;
};
