import { AutocompleteInput, ReferenceInput } from "react-admin";

interface ICountryInputProps {
  source: string;
  reference: string;
  optionText: string;
}

const FilterInput = ({ source, reference, optionText }: ICountryInputProps) => {
  const filterToQuery = (searchText: string) => ({
    country: `%${searchText}%`,
  });

  return (
    <ReferenceInput source={source} reference={reference}>
      <AutocompleteInput
        filterToQuery={filterToQuery}
        optionText={optionText}
      />
    </ReferenceInput>
  );
};

export default FilterInput;
