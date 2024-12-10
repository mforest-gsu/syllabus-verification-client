import type { AuthToken } from "../types";

import { createContext } from "react";

const AuthContext = createContext<AuthToken>({
    accessToken: '',
    expiresOn: 0
});

export default AuthContext;
