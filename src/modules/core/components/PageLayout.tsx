import type { SxProps, Theme } from "../../../lib/mui/types";
import type { WithChildrenProps } from "../../../lib/react/types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Suspense } from "react";
import createPageTheme from "./createPageTheme";
import LoadingSpinner from "./LoadingSpinner";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const boxSx = {
  flexGrow: 1,
  margin: "16px",
  minHeight: "100%",
} as SxProps<Theme>;

export default function PageLayout({
  children,
}: WithChildrenProps): JSX.Element {
  return (
    <ThemeProvider theme={createPageTheme()}>
      <CssBaseline />
      <PageHeader />
      <Box component="main" role="main" sx={boxSx}>
        <Toolbar />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
      </Box>
      <PageFooter />
    </ThemeProvider>
  );
}
