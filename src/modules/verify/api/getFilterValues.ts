import type { FilterValues, GetFilterValuesParams } from "../types";
import sendHttpRequest from "../../../lib/axios/sendHttpRequest";

export default async function getFilterValues({
  authToken,
}: GetFilterValuesParams): Promise<FilterValues> {
  return sendHttpRequest<null, FilterValues>(`GET`, `/filters`, null, null, {
    Authorization: `Bearer ${authToken?.accessToken}`,
  });
}
