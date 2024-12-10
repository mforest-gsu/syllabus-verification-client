import type {
  GridFilterModel,
  GridRowSelectionModel,
  GridPaginationModel,
  GridSortModel,
} from "../../../lib/mui/types";
import type { UseCourseSections } from "../types";

import { createContext } from "react";
import emptyUseState from "../../../lib/react/emptyUseState";

const CourseSectionsContext = createContext<UseCourseSections>({
  result: { status: "loading " },
  selected: emptyUseState<GridRowSelectionModel>([]),
  pagination: emptyUseState<GridPaginationModel>({
    page: 0,
    pageSize: 25,
  }),
  filter: emptyUseState<GridFilterModel>({
    items: [],
  }),
  sort: emptyUseState<GridSortModel>([]),
});

export default CourseSectionsContext;
