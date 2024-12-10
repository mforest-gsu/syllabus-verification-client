import { useContext } from "react";
import SelectFormControl from "../../../core/components/SelectFormControl";
import FiltersContext from "../../contexts/FiltersContext";

export default function DepartmentFilter(): JSX.Element {
  const {
    result: { data },
    selected: [selectedFilters, setSelectedFilters],
  } = useContext(FiltersContext);

  return (
    <SelectFormControl
      label="Department"
      items={data?.Department}
      onChange={(event) =>
        setSelectedFilters((v) => ({
          ...v,
          DepartmentCode: event.target.value,
        }))
      }
      defaultValue={selectedFilters.DepartmentCode}
    />
  );
}
