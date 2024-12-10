import type {
  FilterColumnsArgs,
  GetColumnForNewFilterArgs,
  GridFilterModel,
} from "@mui/x-data-grid-premium";
import { DataGridPremium, GridToolbar } from "@mui/x-data-grid-premium";
import { useContext, useMemo, useRef } from "react";
import CourseSectionsContext from "../../contexts/CourseSectionsContext";
import columns from "./CourseDataGridColumns";
import { debounce } from "@mui/material";

export default function CourseDataGrid(): JSX.Element {
  const {
    result: { status, count, data },
    selected: [selected, setSelected],
    pagination: [pagination, setPagination],
    filter: [filter, setFilter],
    sort: [sort, setSort],
  } = useContext(CourseSectionsContext);

  // If the value `rows` becomes `undefined` during loading, it will reset the page to zero. To avoid this issue, the
  // `rowCount` value is memoized to ensure it doesn't change during loading
  const rowCountRef = useRef(count || 0);
  const rowCount = useMemo(() => {
    if (count !== undefined) {
      rowCountRef.current = count;
    }
    return rowCountRef.current;
  }, [count]);

  if (status === "error") {
    throw "Opps!";
  }

  return (
    <div style={{ height: 417, width: "100%" }}>
      <DataGridPremium
        // columns
        columns={columns}
        disableColumnSelector={true}
        columnVisibilityModel={{
          id: false,
          CollegeCode: false,
          DepartmentCode: false,
          SubjectCode: false,
          CourseNumber: false,
          SequenceNumber: false,
          InstructorFirstName: false,
          InstructorLastName: false,
          InstructorEmail: false,
          VerifyDateStart: false,
          VerifyDateEnd: false,
        }}
        // data
        loading={status === "loading"}
        rowCount={rowCount}
        rows={data ?? []}
        // selection
        checkboxSelection={true}
        disableRowSelectionOnClick={true}
        keepNonExistentRowsSelected={true}
        rowSelectionModel={selected}
        onRowSelectionModelChange={setSelected}
        // pagination
        pagination
        paginationMode="server"
        paginationModel={pagination}
        onPaginationModelChange={(p) => {
          if (status === "complete") {
            setPagination(p);
          }
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        // filtering
        filterMode="server"
        filterModel={filter}
        onFilterModelChange={debounce<(model: GridFilterModel) => void>((f) => {
          console.log(f);
          setFilter(f);
        }, 400)}
        // sorting
        sortModel={sort}
        onSortModelChange={setSort}
        // toolbar
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          filterPanel: {
            filterFormProps: {
              filterColumns,
            },
            getColumnForNewFilter,
          },
          toolbar: {
            csvOptions: {
              disableToolbarButton: true,
            },
            excelOptions: {
              disableToolbarButton: true,
            },
            printOptions: {
              disableToolbarButton: true,
            },
          },
        }}
      />
    </div>
  );
}

function filterColumns({ field, columns, currentFilters }: FilterColumnsArgs) {
  // remove already filtered fields from list of columns
  const filteredFields = currentFilters?.map((item) => item.field);
  return columns
    .filter(
      (colDef) =>
        colDef.filterable &&
        (colDef.field === field || !filteredFields.includes(colDef.field))
    )
    .map((column) => column.field);
}

function getColumnForNewFilter({
  currentFilters,
  columns,
}: GetColumnForNewFilterArgs) {
  const filteredFields = currentFilters?.map(({ field }) => field);
  const columnForNewFilter = columns
    .filter(
      (colDef) => colDef.filterable && !filteredFields.includes(colDef.field)
    )
    .find((colDef) => colDef.filterOperators?.length);
  return columnForNewFilter?.field ?? null;
}
