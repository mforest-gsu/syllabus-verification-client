import type {
  GetCourseSectionsParams,
  CourseSection,
  GetCourseSections,
} from "../types";
import sendHttpRequest from "../../../lib/axios/sendHttpRequest";

export default async function getCourseSections(
  params: GetCourseSectionsParams
): Promise<GetCourseSections> {
  if (
    params.TermCode === "" ||
    params.CollegeCode === "" ||
    params.DepartmentCode === ""
  ) {
    return {
      count: 0,
      data: [],
    };
  }

  const courseSections = await sendHttpRequest<null, GetCourseSections>(
    `GET`,
    `/courses`,
    {
      ...params,
      authToken: undefined,
      offset: params.offset?.toString(),
      limit: params.limit?.toString(),
      orderBy: params.orderBy,
    },
    null,
    {
      Authorization: `Bearer ${params.authToken?.accessToken}`,
    }
  );

  courseSections.data = courseSections.data.map(
    (value): CourseSection => ({
      ...value,
      VerifyDate: value.VerifyDate ? new Date(value.VerifyDate) : null,
    })
  );

  return courseSections;
}
