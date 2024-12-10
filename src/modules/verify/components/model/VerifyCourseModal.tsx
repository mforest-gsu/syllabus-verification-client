import { Modal } from "@mui/material";
import { useContext } from "react";
import VerifyContext from "../../contexts/VerifyContext";
import LoadingSpinner from "../../../core/components/LoadingSpinner";

export default function VerifyCourseModal(): JSX.Element {
  const { mutation } = useContext(VerifyContext);

  return (
    <Modal open={mutation?.status !== "idle"}>
      <div>
        <LoadingSpinner />
      </div>
    </Modal>
  );
}
