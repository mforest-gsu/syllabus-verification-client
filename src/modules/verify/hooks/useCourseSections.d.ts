import type { AuthToken } from "../../auth/types";
import type { UseCourseSections, UseFilters } from "../types";
export default function useCourseSections(authToken: AuthToken, { selected: [selectedFilters] }: UseFilters): UseCourseSections;
