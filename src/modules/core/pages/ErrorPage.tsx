import type { ReactNode } from "react";
import { Navigate, useRouteError } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import NotFoundPage from "./NotFoundPage";

export type ErrorPageProps = {
  error?: unknown;
  children?: ReactNode;
};

export type RouteError = {
  statusText?: string | null;
  message?: string | null;
};

export default ErrorPage;
export { NotFoundPage };

function ErrorPage({ error, children }: ErrorPageProps): JSX.Element | null {
  const routeError = useRouteError() as RouteError | null;

  try {
    const message = getErrorMessage(error, routeError);

    if (message === "Request failed with status code 401") {
      return <Navigate to="/login" />;
    } else if (message === "Not Found") {
      return <NotFoundPage />;
    } else {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <div>
            <p>{message}</p>
            {children}
          </div>
        </Alert>
      );
    }
  } catch (error) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <div>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
      </Alert>
    );
  }
}

function getErrorMessage(
  error: unknown,
  routeError: RouteError | null
): string {
  let errorMessage: string | null = null;
  if (typeof error === "string") {
    errorMessage = error;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (error instanceof String) {
    errorMessage = error.toString();
  }

  const routeErrorText = routeError
    ? routeError.statusText || routeError.message || null
    : null;

  const defaultErrorMessage = "Sorry, an unexpected error has occurred.";

  return errorMessage ?? routeErrorText ?? defaultErrorMessage;
}
