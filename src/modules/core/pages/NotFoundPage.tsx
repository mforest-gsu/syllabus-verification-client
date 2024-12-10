import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "../components/Link";

export default function NotFoundPage(): JSX.Element {
  return (
    <Alert severity="warning">
      <AlertTitle>Not Found</AlertTitle>
      <div>
        <p>This page doesn&apos;t exist.</p>
        <p>
          If this is a mistake,&nbsp;
          <Link href="mailto:help@gsu.edu" target="_blank" rel="noreferrer">
            let us know
          </Link>
          , and we&apos;ll try to fix it!
        </p>
      </div>
    </Alert>
  );
}
