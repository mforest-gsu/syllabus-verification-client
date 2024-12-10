import type { AuthToken } from "../../auth/types";
import type { UseCourseSections, UseVerify } from "../types";
import unverifyCourseSections from "../api/unverifyCourseSections";
import verifyCourseSections from "../api/verifyCourseSections";
import { useMutation } from "react-query";
import { useEffect } from "react";

export default function useVerify(
  authToken: AuthToken,
  { result: { result }, selected: [selected, setSelected] }: UseCourseSections
): UseVerify {
  const mutation = useMutation({
    mutationFn: (status: string) =>
      status === "Verified"
        ? verifyCourseSections({ authToken, selected })
        : unverifyCourseSections({ authToken, selected }),
  });

  useEffect(() => {
    if (mutation.status === "success") {
      setSelected([]);
      result?.remove();
      mutation.reset();
    }
  }, [mutation, result, setSelected]);

  return {
    mutation,
  };
}
