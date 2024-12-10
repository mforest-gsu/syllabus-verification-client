import type { SelectFormControlItem, SelectFormControlProps } from "../types";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectFormControlSelect({
  idPrefix,
  noneLabel,
  label,
  onChange,
  defaultValue,
  items,
}: SelectFormControlProps): JSX.Element {
  return (
    <Select
      value={defaultValue ?? ""}
      onChange={onChange}
      inputProps={{
        id: `${idPrefix}_input`,
        title: label,
        style: {
          display: "none",
        },
      }}
    >
      <MenuItem value="">
        <em>{noneLabel ?? "None"}</em>
      </MenuItem>

      {items?.map((item: SelectFormControlItem) => (
        <MenuItem
          key={`${idPrefix}_item_${item.parent}${item.value}`}
          value={item.value}
        >
          {item.extra ?? null}
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
