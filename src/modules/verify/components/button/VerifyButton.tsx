import ChecklistIcon from "@mui/icons-material/Checklist";
import Button from "../../../../lib/mui/Button";
import CourseSectionsContext from "../../contexts/CourseSectionsContext";
import VerifyContext from "../../contexts/VerifyContext";
import { useContext } from "react";

export default function VerifyButton(): JSX.Element {
  const {
    selected: [selected],
  } = useContext(CourseSectionsContext);

  const { mutation } = useContext(VerifyContext);
  if (!mutation) {
    return <></>;
  }

  const onClickOfVerifyButton = () => {
    if (mutation.status === "idle") {
      mutation.mutate("Verified");
    }
  };

  return (
    <Button
      variant="outlined"
      color="default"
      startIcon={<ChecklistIcon />}
      onClick={onClickOfVerifyButton}
      disableRipple={true}
      disabled={!(selected.length > 0 && mutation.status === "idle")}
      aria-disabled={!(selected.length > 0 && mutation.status === "idle")}
      sx={{ textTransform: "none" }}
    >
      Verify
    </Button>
  );
}
