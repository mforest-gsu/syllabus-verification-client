import type { SelectFormControlProps } from "../types";
import InputLabel from "@mui/material/InputLabel";
import { Fragment } from "react";

export default function SelectFormControlLabel({
  idPrefix,
  label,
}: SelectFormControlProps): JSX.Element {
  return (
    <Fragment>
      <InputLabel component="div" sx={{ backgroundColor: "#fff" }}>
        {label}
      </InputLabel>

      <label
        id={`${idPrefix}_label`}
        htmlFor={`${idPrefix}_input`}
        style={{ display: "none" }}
      >
        {label}
      </label>
    </Fragment>
  );
}
