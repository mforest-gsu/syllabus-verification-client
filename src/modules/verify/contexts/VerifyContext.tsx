import type { UseVerify } from "../types";
import { createContext } from "react";

const VerifyContext = createContext<UseVerify>({});

export default VerifyContext;
