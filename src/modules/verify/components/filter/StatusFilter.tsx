import { useContext } from "react";
import SelectFormControl from "../../../core/components/SelectFormControl";
import FiltersContext from "../../contexts/FiltersContext";

export default function StatusFilter(): JSX.Element {
  const {
    result: { data },
    selected: [selectedFilters, setSelectedFilters],
  } = useContext(FiltersContext);

  return (
    <SelectFormControl
      noneLabel="Any"
      label="Status"
      items={data?.Status}
      onChange={(event) =>
        setSelectedFilters((v) => ({
          ...v,
          VerifyStatus: event.target.value,
        }))
      }
      defaultValue={selectedFilters.VerifyStatus}
    />
  );
}
