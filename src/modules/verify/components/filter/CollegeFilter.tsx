import { useContext } from "react";
import SelectFormControl from "../../../core/components/SelectFormControl";
import FiltersContext from "../../contexts/FiltersContext";

export default function CollegeFilter(): JSX.Element {
  const {
    result: { data },
    selected: [selectedFilters, setSelectedFilters],
  } = useContext(FiltersContext);

  return (
    <SelectFormControl
      label="College"
      items={data?.College}
      onChange={(event) =>
        setSelectedFilters((v) => ({
          ...v,
          CollegeCode: event.target.value,
          DepartmentCode: "",
        }))
      }
      defaultValue={selectedFilters.CollegeCode}
    />
  );
}
