import { AutocompleteInput, useGetMany } from "react-admin";

interface ICountryInputProps {
  source: string;
  label: string;
  url: string;
  alwaysOn: boolean;
  onChange?: (value: string) => void;
}

const FilterInput = ({ source, label, url, onChange }: ICountryInputProps) => {
  const { data } = useGetMany(url, { ids: [1] });

  return (
    <AutocompleteInput
      source={source}
      label={label}
      choices={data}
      onChange={onChange}
      id={source}
      alwaysOn
    />
  );
};

export default FilterInput;
