import type { UseMutationResult } from "react-query";
import type {
  GridFilterModel,
  GridPaginationModel,
  GridRowSelectionModel,
  GridSortModel,
} from "../../lib/mui/types";
import type { ReactQueryResult } from "../../lib/react-query/types";
import type { UseState } from "../../lib/react/types";
import type { AuthToken } from "../auth/types";
import type { SelectFormControlItem } from "../core/types";

export type CourseSection = {
  id: number;
  TermCode: string;
  TermDescription: string;
  CollegeCode: string;
  CollegeDescription: string;
  DepartmentCode: string;
  DepartmentDescription;
  CRN: string;
  SubjectCode: string;
  CourseNumber: string;
  SequenceNumber: string;
  CourseTitle: string;
  InstructorFirstName: string | null;
  InstructorLastName: string | null;
  InstructorEmail: string | null;
  VerifyStatus: string;
  VerifyDate: Date | null;
  VerifyUser: string | null;
};

export type FilterValues = {
  Term: SelectFormControlItem[];
  College?: SelectFormControlItem[];
  Department?: SelectFormControlItem[];
  Status: SelectFormControlItem[];
};

export type SelectedFilterValues = {
  TermCode: string;
  CollegeCode: string;
  DepartmentCode: string;
  VerifyStatus: string;
};

export type AuthTokenParams = {
  authToken?: AuthToken;
};

export type GetCourseSectionsParams = AuthTokenParams & {
  TermCode: string;
  CollegeCode: string;
  DepartmentCode: string;
  VerifyStatus?: string;
  VerifyStatus?: string;
  offset?: number;
  limit?: number;
  orderBy?: string;
};

export type GetCourseSections = {
  count: number;
  data: CourseSection[];
};

export type GetFilterValuesParams = AuthTokenParams;

export type UpdateCourseSectionsParams = AuthTokenParams & {
  authToken?: AuthToken;
  selected: GridRowSelectionModel;
};

export type UseFilters = {
  result: ReactQueryResult<FilterValues>;
  selected: UseState<SelectedFilterValues>;
};

export type UseCourseSections = {
  result: ReactQueryResult<CourseSection[], GetCourseSections> & {
    count?: number;
  };
  selected: UseState<GridRowSelectionModel>;
  pagination: UseState<GridPaginationModel>;
  filter: UseState<GridFilterModel>;
  sort: UseState<GridSortModel>;
};

export type UseVerify = {
  mutation?: UseMutationResult<boolean, unknown, string, unknown>;
};

export type VerifyCourseContext = {
  filters: UseFilters;
  courseSections: UseCourseSections;
};
