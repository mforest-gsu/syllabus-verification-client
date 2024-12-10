import type {
  DispatchSetStateAction,
  WithChildrenProps,
} from "../../../lib/react/types";
import type { SetURLSearchParams } from "../../../lib/react-router/types";
import type { AuthToken } from "../types";
import { Navigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingSpinner from "../../core/components/LoadingSpinner";
import checkAuth from "../api/checkAuth";
import useAuthToken from "../hooks/useAuthToken";
import AuthContext from "./AuthContext";

export default function AuthContextProvider({
  children,
}: WithChildrenProps): JSX.Element {
  const { newToken, currentToken, setCurrentToken } = useAuthToken();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (newToken !== null) {
      return replaceCurrent(
        newToken,
        currentToken,
        setCurrentToken,
        searchParams,
        setSearchParams
      );
    }

    if (
      currentToken !== null &&
      currentToken.expiresOn >= Math.floor(Date.now() / 1000)
    ) {
      return checkCurrent(currentToken, setCurrentToken);
    }
  }, [newToken, currentToken, setCurrentToken, searchParams, setSearchParams]);

  if (newToken !== null) {
    return <LoadingSpinner />;
  }

  // Current token is invalid or expired. User must (re)login
  if (
    currentToken === null ||
    Math.floor(Date.now() / 1000) >= currentToken.expiresOn
  ) {
    return <Navigate to="/login" />;
  }

  return (
    <AuthContext.Provider value={currentToken}>{children}</AuthContext.Provider>
  );
}

function replaceCurrent(
  newToken: AuthToken,
  currentToken: AuthToken | null,
  setCurrentToken: DispatchSetStateAction<AuthToken | null>,
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams
): () => void {
  if (newToken.accessToken !== currentToken?.accessToken) {
    // Replace the current token with new token
    newToken.lastChecked = Math.floor(Date.now() / 1000);
    setCurrentToken(newToken);
  } else {
    // Remove "token" param if it's equal to the current token
    searchParams.delete("token");
    setSearchParams(searchParams);
  }

  return () => void 0;
}

function checkCurrent(
  currentToken: AuthToken,
  setCurrentToken: DispatchSetStateAction<AuthToken | null>
): () => void {
  const interval = setInterval(
    () =>
      void (async (): Promise<void> => {
        try {
          const expiredOn = await checkAuth(currentToken);
          setCurrentToken({ ...currentToken, expiresOn: expiredOn });
        } catch (e) {
          setCurrentToken({ ...currentToken, expiresOn: 0 });
        }
      })(),
    300000
  );

  return () => clearInterval(interval);
}
