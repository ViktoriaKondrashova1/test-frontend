import {
  SearchInput,
  Filter,
  useListParams,
  useListContext,
} from "react-admin";
import FilterInput from "../Inputs/FilterInput/FilterInput.tsx";
import jobIcon from "../../assets/svg/job.svg";
import locationIcon from "../../assets/svg/location.svg";
import industryIcon from "../../assets/svg/Industry.svg";
import "./FilterSidebar.scss";

const FilterSidebar = () => {
  const { setFilters } = useListContext();
  const [listParams] = useListParams({
    resource: "contacts",
  });
  const filtersApplied = Object.keys(listParams.filter).length;

  return (
    <div className="filters">
      <div className="filters__title-wrap">
        <h3 className="filters__title">Filters</h3>
        {filtersApplied > 0 && (
          <>
            <div className="filters__count">{filtersApplied}</div>
            <button
              className="filters__clear-btn"
              onClick={() => setFilters({}, [])}
            >
              Clear filter
            </button>
          </>
        )}
      </div>
      <div className="filters__wrapper">
        <h4 className="filters__subtitle">
          <img className="filters__icon" src={jobIcon} alt="job icon" />
          Job title
        </h4>
        <Filter>
          <SearchInput
            source="job_title"
            placeholder=" Search by job title"
            resettable={false}
            alwaysOn
          />
        </Filter>
        <div className="filters__line" />
        <h4 className="filters__subtitle">
          <img className="filters__icon" src={locationIcon} alt="job icon" />
          Location
        </h4>
        <Filter>
          <FilterInput
            source="country"
            label="Choose location"
            url="contacts/countries"
            alwaysOn
          />
        </Filter>
        <div className="filters__line" />
        <h4 className="filters__subtitle">
          <img className="filters__icon" src={industryIcon} alt="job icon" />
          Industry
        </h4>
        <Filter>
          <FilterInput
            source="industry"
            label="Choose industry"
            url="contacts/industries"
            alwaysOn
          />
        </Filter>
      </div>
    </div>
  );
};

export default FilterSidebar;
