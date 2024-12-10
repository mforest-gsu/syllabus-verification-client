import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import "../styles/PageFooter.css";

export default function PageFooter(): JSX.Element {
  const year = new Date().getFullYear();
  const divider = (
    <Divider orientation="vertical" flexItem className="divider" />
  );

  return (
    <Toolbar component="footer" role="contentinfo">
      <Stack className="page-footer" spacing={2}>
        <Stack direction="row" spacing={2} divider={divider}>
          <img
            width="74"
            height="77"
            src="https://cetl.gsu.edu/wp-content/themes/gsu-core/img/logo-footer.png"
            alt="Georgia State University"
          ></img>
        </Stack>

        <Stack direction="row" spacing={2} divider={divider}>
          <span>Georgia State University</span>
          <span>
            <a
              href="https://map.concept3d.com/?id=1108#!m/295226?ce/0,22381,27051,27053?s/Sparks%20Hall?ct/0,22383,27114,27113,38302"
              target="_blank"
              rel="noreferrer"
            >
              33 Gilmer Street SE Atlanta, GA
            </a>
          </span>
          <span>
            <a href="tel:+14044132000">404-413-2000</a>
          </span>
        </Stack>

        <Stack direction="row" spacing={2} divider={divider}>
          <a
            href="https://www.gsu.edu/contact-georgia-state/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Contact Georgia State
          </a>
          <a
            href="https://www.gsu.edu/legal-statement"
            target="_blank"
            rel="noreferrer"
          >
            View legal statement
          </a>
          <a
            href="https://www.gsu.edu/privacy-notices/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Notices
          </a>
          <a
            href="https://gsu.edu/state-authorization"
            target="_blank"
            rel="noreferrer"
          >
            State Authorization
          </a>
          <a href="https://gsu.uservoice.com" target="_blank" rel="noreferrer">
            Website Feedback
          </a>
          <span style={{ color: "#FFF" }}>
            &copy;{year} Georgia State University
          </span>
        </Stack>
      </Stack>
    </Toolbar>
  );
}
