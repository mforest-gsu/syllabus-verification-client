import { useContext } from "react";
import AuthContext from "../../auth/contexts/AuthContext";
import LoadingSpinner from "../../core/components/LoadingSpinner";
import CourseSectionsContext from "../contexts/CourseSectionsContext";
import FiltersContext from "../contexts/FiltersContext";
import VerifyContext from "../contexts/VerifyContext";
import VerifyCoursePageContents from "../components/VerifyCoursePageContents";
import useCourseSections from "../hooks/useCourseSections";
import useFilters from "../hooks/useFilters";
import useVerify from "../hooks/useVerify";

export default function VerifyCoursePage(): JSX.Element {
  const authToken = useContext(AuthContext);
  const filters = useFilters(authToken);
  const courseSections = useCourseSections(authToken, filters);
  const verifyMutation = useVerify(authToken, courseSections);

  if (filters.result.status === "loading") {
    return <LoadingSpinner />;
  }

  if (filters.result.status === "error") {
    throw "Opps!";
  }
  if (courseSections.result.status === "error") {
    throw "Opps!";
  }
  if (verifyMutation?.mutation?.status === "error") {
    throw "Opps!";
  }

  return (
    <FiltersContext.Provider value={filters}>
      <CourseSectionsContext.Provider value={courseSections}>
        <VerifyContext.Provider value={verifyMutation}>
          <VerifyCoursePageContents />
        </VerifyContext.Provider>
      </CourseSectionsContext.Provider>
    </FiltersContext.Provider>
  );
}
