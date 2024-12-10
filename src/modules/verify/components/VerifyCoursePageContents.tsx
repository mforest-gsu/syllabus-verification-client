import { lazy } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
//import CourseDataGrid from "./grid/CourseDataGrid";
import CollegeFilter from "./filter/CollegeFilter";
import DepartmentFilter from "./filter/DepartmentFilter";
import StatusFilter from "./filter/StatusFilter";
import TermFilter from "./filter/TermFilter";
import UnverifyButton from "./button/UnverifyButton";
import VerifyButton from "./button/VerifyButton";
import VerifyCourseModal from "./model/VerifyCourseModal";

const CourseDataGrid = lazy(() => import("./grid/CourseDataGrid"));

export default function VerifyCoursePageContents(): JSX.Element {
  return (
    <>
      <Paper elevation={2} sx={{ padding: "12px 16px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              component="h2"
              variant="h5"
              style={{ textAlign: "center" }}
            >
              Course Syllabus Verification
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TermFilter />
          </Grid>
          <Grid item xs={12} sm={3}>
            <CollegeFilter />
          </Grid>
          <Grid item xs={12} sm={3}>
            <DepartmentFilter />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatusFilter />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <VerifyButton />
              <UnverifyButton />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <CourseDataGrid />
          </Grid>
        </Grid>
      </Paper>
      <VerifyCourseModal />
    </>
  );
}
