import type { UpdateCourseSectionsParams } from "../types";
import sendHttpRequest from "../../../lib/axios/sendHttpRequest";

export default async function unverifyCourseSections({
  authToken,
  selected,
}: UpdateCourseSectionsParams): Promise<boolean> {
  if (selected.length < 1) {
    return true;
  }

  return sendHttpRequest<UpdateCourseSectionsParams, boolean>(
    `PUT`,
    `/courses/unverify`,
    null,
    {
      selected,
    },
    {
      Authorization: `Bearer ${authToken?.accessToken}`,
    }
  );
}
