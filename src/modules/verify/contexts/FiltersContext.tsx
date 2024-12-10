import type { SelectedFilterValues, UseFilters } from "../types";
import emptyUseState from "../../../lib/react/emptyUseState";

import { createContext } from "react";

const FiltersContext = createContext<UseFilters>({
  result: { status: "loading" },
  selected: emptyUseState<SelectedFilterValues>({
    TermCode: "",
    CollegeCode: "",
    DepartmentCode: "",
    VerifyStatus: "Unverified",
  }),
});

export default FiltersContext;
