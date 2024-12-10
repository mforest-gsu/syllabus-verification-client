import type { AuthToken, UseAuthToken } from "../types";
import { useSearchParams } from "react-router-dom";
import useLocalStorage from "../../../lib/react/useLocalStorage";

export default function useAuthToken(): UseAuthToken {
  const [searchParams] = useSearchParams();
  const [currentToken, setCurrentToken, clearCurrentToken] =
    useLocalStorage<AuthToken | null>("authToken", null);
  const newToken = JSON.parse(
    searchParams.get("token") ?? "null"
  ) as AuthToken | null;

  return {
    newToken,
    currentToken,
    setCurrentToken,
    clearCurrentToken,
  };
}
