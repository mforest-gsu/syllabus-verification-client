import type { FilterValues, SelectedFilterValues, UseFilters } from "../types";
import type { AuthToken } from "../../auth/types";
import { useState } from "react";
import { useQuery } from "react-query";
import getFilterValues from "../api/getFilterValues";

export default function useFilters(authToken: AuthToken): UseFilters {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilterValues>({
    TermCode: "",
    CollegeCode: "",
    DepartmentCode: "",
    VerifyStatus: "Unverified",
  });

  const filters = useQuery<FilterValues, null>({
    queryKey: [`./modules/verify/hooks/useFilterValues`],
    queryFn: async () => getFilterValues({ authToken }),
  });

  let status;
  switch (true) {
    case filters.isError:
      status = "error";
      break;
    case filters.isLoading || filters.isFetching:
      status = "loading";
      break;
    case filters.data === undefined:
      status = "error";
      break;
    default:
      status = "complete";
      break;
  }

  const Term = filters.data?.Term ?? [];
  const College =
    Term.find(
      (value) => value.value === selectedFilters.TermCode
    )?.children?.map((value) => ({
      ...value,
      parent: selectedFilters.TermCode,
    })) ?? [];
  const Department =
    College.find(
      (value) => value.value === selectedFilters.CollegeCode
    )?.children?.map((value) => ({
      ...value,
      parent: `${selectedFilters.TermCode}${selectedFilters.CollegeCode}`,
    })) ?? [];
  const Status = filters.data?.Status ?? [];

  return {
    result: {
      status,
      data: {
        Term,
        College,
        Department,
        Status,
      },
    },
    selected: [selectedFilters, setSelectedFilters],
  };
}
