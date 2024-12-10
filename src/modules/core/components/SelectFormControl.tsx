import type { SelectFormControlProps } from "../types";
import FormControl from "@mui/material/FormControl";
import SelectFormControlLabel from "./SelectFormControlLabel";
import SelectFormControlSelect from "./SelectFormControlSelect";

export default function SelectFormControl(
  props: SelectFormControlProps
): JSX.Element | null {
  const myProps = {
    ...props,
    idPrefix: props.idPrefix ?? props.label.replace(" ", "_"),
  };

  return (
    <FormControl fullWidth>
      <SelectFormControlLabel {...myProps} />
      <SelectFormControlSelect {...myProps} />
    </FormControl>
  );
}
