import {
  FilterLiveSearch,
  AutocompleteInput,
  Form,
  useDataProvider,
} from "react-admin";
import jobIcon from "../../assets/svg/job.svg";
import locationIcon from "../../assets/svg/location.svg";
import industryIcon from "../../assets/svg/Industry.svg";
import "./FilterSidebar.scss";

const FilterSidebar = () => {
  const countries: string[] = [];
  const industries: string[] = [];
  const dataProvider = useDataProvider();
  dataProvider.getMany("contacts/countries", { ids: [1] }).then((data) => {
    data.data.map((item) => countries.push(item.name));
  });
  dataProvider.getMany("contacts/industries", { ids: [1] }).then((data) => {
    data.data.map((item) => industries.push(item.name));
  });
  return (
    <div className="filters">
      <h3 className="filters__title">Filters</h3>
      <div className="filters__wrapper">
        <Form>
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={jobIcon} alt="job icon" />
            Job title
          </h4>
          <FilterLiveSearch
            source="job_title"
            placeholder=" Search by job title"
          />
          <div className="filters__line" />
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={locationIcon} alt="job icon" />
            Location
          </h4>
          <AutocompleteInput source="Choose location" choices={countries} />
          <div className="filters__line" />
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={industryIcon} alt="job icon" />
            Industry
          </h4>
          <AutocompleteInput source="Choose industry" choices={industries} />
        </Form>
      </div>
    </div>
  );
};

export default FilterSidebar;
