import type { GridColDef } from "../../../../lib/mui/types";
import type { CourseSection } from "../../types";
import {
  getGridStringOperators,
  getGridDateOperators,
} from "@mui/x-data-grid-premium";

const stringContainsOperator = getGridStringOperators().filter(
  (o) => o.value === "contains"
);
const stringStartsWithOperator = getGridStringOperators().filter(
  (o) => o.value === "startsWith"
);

const columns: GridColDef<CourseSection>[] = [
  {
    field: "TermCode",
    headerName: "Term",
    width: 174,
    valueFormatter: (value, row) => {
      return value ? row.TermDescription : value;
    },
    aggregable: false,
    filterable: false,
    groupable: false,
  },
  {
    field: "CollegeCode",
    filterable: false,
  },
  {
    field: "DepartmentCode",
    filterable: false,
  },
  {
    field: "CRN",
    headerName: "CRN",
    width: 61,
    aggregable: false,
    groupable: false,
    filterOperators: stringStartsWithOperator,
  },
  {
    field: "SubjectCode",
    headerName: "Course Subject",
    aggregable: false,
    groupable: false,
    filterOperators: stringStartsWithOperator,
  },
  {
    field: "CourseNumber",
    headerName: "Course Number",
    aggregable: false,
    groupable: false,
    filterOperators: stringStartsWithOperator,
  },
  {
    field: "SequenceNumber",
    headerName: "Course Sequence",
    aggregable: false,
    groupable: false,
    filterOperators: stringStartsWithOperator,
  },
  {
    field: "CourseCode",
    headerName: "Course Code",
    width: 123,
    aggregable: false,
    filterable: false,
    groupable: false,
    valueFormatter: (value, row) => {
      value;
      return `${row.SubjectCode} ${row.CourseNumber} ${row.SequenceNumber}`;
    },
  },
  {
    field: "CourseTitle",
    headerName: "Course Title",
    flex: 0.7,
    aggregable: false,
    groupable: false,
    filterOperators: stringContainsOperator,
  },
  {
    field: "InstructorFirstName",
    headerName: "Instructor First Name",
    aggregable: false,
    groupable: false,
    filterOperators: stringContainsOperator,
  },
  {
    field: "InstructorLastName",
    headerName: "Instructor Last Name",
    aggregable: false,
    groupable: false,
    filterOperators: stringContainsOperator,
  },
  {
    field: "InstructorEmail",
    headerName: "Instructor Email",
    aggregable: false,
    groupable: false,
    filterOperators: stringContainsOperator,
  },
  {
    field: "InstructorName",
    headerName: "Instructor",
    flex: 1,
    valueFormatter: (value: string | undefined, row) => {
      if (row.InstructorFirstName && row.InstructorLastName) {
        value = `${row.InstructorFirstName} ${row.InstructorLastName}`;
      }
      if (value && row.InstructorEmail) {
        value += ` <${row.InstructorEmail}>`;
      }
      return value ?? "";
    },
    aggregable: false,
    filterable: false,
    groupable: false,
  },
  {
    field: "VerifyStatus",
    headerName: "Verify Status",
    width: 103,
    aggregable: false,
    filterable: false,
    groupable: false,
  },
  {
    field: "VerifyDateStart",
    type: "date",
    headerName: "Verify Date Start",
    filterOperators: getGridDateOperators().filter(
      (o) => o.value === "onOrAfter"
    ),
  },
  {
    field: "VerifyDateEnd",
    type: "date",
    headerName: "Verify Date End",
    filterOperators: getGridDateOperators().filter(
      (o) => o.value === "onOrBefore"
    ),
  },
  {
    field: "VerifyDate",
    type: "date",
    headerName: "Verified On",
    width: 140,
    aggregable: false,
    filterable: false,
    groupable: false,
  },
  {
    field: "VerifyUser",
    headerName: "Verified By",
    flex: 0.5,
    aggregable: false,
    groupable: false,
    filterOperators: stringStartsWithOperator,
  },
];

export default columns;
