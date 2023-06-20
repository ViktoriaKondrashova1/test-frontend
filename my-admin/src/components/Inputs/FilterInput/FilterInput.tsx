import { AutocompleteInput, useGetMany } from "react-admin";

interface ICountryInputProps {
  source: string;
  label: string;
  url: string;
  alwaysOn: boolean;
}

const FilterInput = ({ source, label, url }: ICountryInputProps) => {
  const { data } = useGetMany(url, { ids: [1, 2] });

  return (
    <AutocompleteInput source={source} label={label} choices={data} alwaysOn />
  );
};

export default FilterInput;
