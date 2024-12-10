import { useContext } from "react";
import SelectFormControl from "../../../core/components/SelectFormControl";
import FiltersContext from "../../contexts/FiltersContext";

export default function TermFilter(): JSX.Element {
  const {
    result: { data },
    selected: [selectedFilters, setSelectedFilters],
  } = useContext(FiltersContext);

  return (
    <SelectFormControl
      label="Term"
      items={data?.Term}
      onChange={(event) =>
        setSelectedFilters((v) => ({
          ...v,
          TermCode: event.target.value,
          CollegeCode: "",
          DepartmentCode: "",
        }))
      }
      defaultValue={selectedFilters.TermCode}
    />
  );
}
