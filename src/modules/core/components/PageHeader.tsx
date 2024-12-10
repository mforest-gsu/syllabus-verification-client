import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../../assets/logo.jpg";

const titleProps = {
  component: "h1",
  variant: "h6" as const,
  color: "inherit",
  noWrap: true,
  sx: {
    flexGrow: 1,
  },
};

export default function PageHeader(): JSX.Element {
  return (
    <AppBar role="banner" position="fixed" sx={{ backgroundColor: "#0033a0" }}>
      <Toolbar>
        <img
          src={logo}
          alt="Georgia State University"
          width={64}
          height={64}
          style={{
            width: "64px",
            height: "64px",
            maxHeight: "64px",
            objectFit: "contain",
          }}
        />

        <Typography {...titleProps}>
          Core IMPACTS: Course Syllabus Verification
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
