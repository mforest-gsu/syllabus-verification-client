import type { DispatchSetStateAction } from "../../lib/react/types";

export type AuthToken = {
  accessToken: string;
  expiresOn: number;
  lastChecked?: number;
};

export type UseAuthToken = {
  newToken: AuthToken | null;
  currentToken: AuthToken | null;
  setCurrentToken: DispatchSetStateAction<AuthToken | null>;
  clearCurrentToken: () => void;
};
