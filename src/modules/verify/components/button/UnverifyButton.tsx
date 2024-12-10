import ClearIcon from "@mui/icons-material/Checklist";
import Button from "../../../../lib/mui/Button";
import CourseSectionsContext from "../../contexts/CourseSectionsContext";
import VerifyContext from "../../contexts/VerifyContext";
import { useContext } from "react";

export default function UnverifyButton(): JSX.Element {
  const {
    selected: [selected],
  } = useContext(CourseSectionsContext);

  const { mutation } = useContext(VerifyContext);
  if (!mutation) {
    return <></>;
  }

  const onClickOfUnverifyButton = () => {
    if (mutation.status === "idle") {
      mutation.mutate("Unverified");
    }
  };

  return (
    <Button
      variant="outlined"
      color="default"
      startIcon={<ClearIcon />}
      onClick={onClickOfUnverifyButton}
      disableRipple={true}
      disabled={!(selected.length > 0 && mutation.status === "idle")}
      aria-disabled={!(selected.length > 0 && mutation.status === "idle")}
      sx={{ textTransform: "none" }}
    >
      Unverify
    </Button>
  );
}
