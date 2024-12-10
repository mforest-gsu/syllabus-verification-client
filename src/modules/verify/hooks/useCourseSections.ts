import type {
  GridFilterModel,
  GridPaginationModel,
  GridRowSelectionModel,
  GridSortModel,
} from "../../../lib/mui/types";
import type { AuthToken } from "../../auth/types";
import type {
  UseCourseSections,
  UseFilters,
  GetCourseSections,
  GetCourseSectionsParams,
} from "../types";
import { useState, useMemo } from "react";
import { useQuery } from "react-query";
import getCourseSections from "../api/getCourseSections";

export default function useCourseSections(
  authToken: AuthToken,
  { selected: [selectedFilters] }: UseFilters
): UseCourseSections {
  const [selected, setSelected] = useState<GridRowSelectionModel>([]);
  const [pagination, setPagination] = useState<GridPaginationModel>({
    pageSize: 25,
    page: 0,
  });
  const [filter, setFilter] = useState<GridFilterModel>({ items: [] });
  const [sort, setSort] = useState<GridSortModel>([]);
  const queryParams = useMemo<GetCourseSectionsParams>(
    () => ({
      authToken: authToken,
      ...selectedFilters,
      ...(() => {
        const f: {[key: string]: string} = {};
        filter.items.forEach((v) => {
          if (typeof v.value === 'string') {
            f[v.field] = v.value;
          }
        });
        return f;
      })(),
      offset: pagination.page * pagination.pageSize,
      limit: pagination.pageSize,
      orderBy: buildOrderByString(sort) ?? undefined,
    }),
    [authToken, selectedFilters, pagination, filter, sort]
  );

  const result = useQuery<GetCourseSections, null>({
    queryKey: [
      "./modules/verify/hooks/useCourseSections",
      ...Object.entries(queryParams),
    ],
    queryFn: async () => getCourseSections(queryParams),
  });

  let status;
  switch (true) {
    case result.isError:
      status = "error";
      break;
    case result.isLoading || result.isFetching:
      status = "loading";
      break;
    case result.data === undefined:
      status = "error";
      break;
    default:
      status = "complete";
      break;
  }

  return {
    result: {
      status,
      count: result.data?.count,
      data: result.data?.data,
      result: result,
    },
    selected: [selected, setSelected],
    pagination: [pagination, setPagination],
    filter: [filter, setFilter],
    sort: [sort, setSort],
  };
}

function buildOrderByString(sort: GridSortModel): string | null {
  return sort.length > 0
    ? sort
        .map((value) => {
          switch (value.field) {
            case "CourseCode":
              return [
                `SubjectCode ${value.sort}`,
                `CourseNumber ${value.sort}`,
                `SequenceNumber ${value.sort}`,
              ].join(",");
            case "InstructorName":
              return [
                `InstructorLastName ${value.sort}`,
                `InstructorFirstName ${value.sort}`,
                `InstructorEmail ${value.sort}`,
              ].join(",");
            default:
              return `${value.field} ${value.sort}`;
          }
        })
        .join(",")
    : null;
}
