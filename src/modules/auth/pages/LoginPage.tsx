import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Navigate, useSearchParams } from "react-router-dom";
import Link from "../../core/components/Link";
import useAuthToken from "../hooks/useAuthToken";
import getLoginURL from "../utils/getLoginURL";
import checkAuth from "../api/checkAuth";
import { useQuery } from "react-query";
import LoadingSpinner from "../../core/components/LoadingSpinner";

export default function LoginPage(): JSX.Element {
  const { currentToken } = useAuthToken();
  const [urlParams] = useSearchParams();
  const skipLoginPrompt = urlParams.get("skipLoginPrompt") ?? "";
  const rightNow = Math.floor(Date.now() / 1000);
  const result = useQuery<number, null>({
    queryKey: [`./modules/auth/pages/LoginPage`],
    queryFn: async () => checkAuth(currentToken ?? { expiresOn: 0, accessToken: "" }),
  });

  if (skipLoginPrompt === "1") {
    window.location.replace(getLoginURL());
    return (
      <Alert severity="info">
        <AlertTitle>Not Authenticated</AlertTitle>
        <div>
          <p>Redirecting to iCollege...</p>
        </div>
      </Alert>
    );
  }

  if (result.status === "loading") {
    return <LoadingSpinner />
  }

  if (rightNow < (result?.data ?? 0)) {
    return <Navigate to="/verify" />;
  }

  return (
    <Alert severity="info">
      <AlertTitle>Not Authenticated</AlertTitle>
      <div>
        <p>
          You are not logged in. Please <Link href={getLoginURL()}>login</Link>{" "}
          to access this site.
        </p>
        <p>
          If you are seeing this page by mistake,&nbsp;
          <Link
            href="mailto:help@gsu.edu"
            target="_blank"
            rel="noreferrer"
            aria-label="Opens email to help desk in new tab"
          >
            contact the GSU Help Desk
          </Link>
          , and we&apos;ll try to help you out!
        </p>
      </div>
    </Alert>
  );
}
