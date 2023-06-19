import { FilterLiveSearch, Form } from "react-admin";
import { useState } from "react";
import FilterInput from "../Inputs/FilterInput/FilterInput.tsx";
import jobIcon from "../../assets/svg/job.svg";
import locationIcon from "../../assets/svg/location.svg";
import industryIcon from "../../assets/svg/Industry.svg";
import "./FilterSidebar.scss";

const FilterSidebar = () => {
  const [filtersApplied, setFiltersApplied] = useState<number>(0);

  const resetFilters = () => {
    setFiltersApplied(0);
  };

  return (
    <div className="filters">
      <div className="filters__title-wrap">
        <h3 className="filters__title">Filters</h3>
        {filtersApplied > 0 && (
          <>
            <div className="filters__count">{filtersApplied}</div>
            <button className="filters__clear-btn" onClick={resetFilters}>
              Clear filter
            </button>
          </>
        )}
      </div>
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
          <FilterInput
            source="Choose location"
            reference="contacts"
            optionText="country"
          />
          <div className="filters__line" />
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={industryIcon} alt="job icon" />
            Industry
          </h4>
          <FilterInput
            source="Choose industry"
            reference="contacts"
            optionText="industry"
          />
        </Form>
      </div>
    </div>
  );
};

export default FilterSidebar;
