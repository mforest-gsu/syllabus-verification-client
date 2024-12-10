import type { AuthToken } from "../../auth/types";
import type { UseCourseSections, UseVerify } from "../types";
export default function useVerify(authToken: AuthToken, { result: { result }, selected: [selected, setSelected] }: UseCourseSections): UseVerify;
