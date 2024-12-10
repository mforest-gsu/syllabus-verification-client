import type {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
  ParamMap,
  RawAxiosRequestHeaders,
  MethodsHeaders,
} from "./types";

import axios from "axios";
import getURL from "./getURL";

export default async function sendHttpRequest<
  RequestData = unknown,
  ResponseData = unknown
>(
  method: Method,
  uri: string,
  params?: string | URLSearchParams | ParamMap | null,
  data?: RequestData,
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders
): Promise<ResponseData> {
  const request = {
    method: method,
    url: getURL(uri, params),
    data: data,
    withCredentials: true,
    headers: headers,
  } as AxiosRequestConfig<RequestData>;

  try {
    const response = await axios<
      ResponseData,
      AxiosResponse<ResponseData, RequestData>,
      RequestData
    >(request);

    return response.data;
  } catch (error) {
    throw {
      request: request,
      error: error,
    };
  }
}
