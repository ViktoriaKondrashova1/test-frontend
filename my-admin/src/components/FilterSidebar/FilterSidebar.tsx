import { TextInput, Filter, useListContext, useStore } from "react-admin";
import { useEffect } from "react";
import FilterInput from "../Inputs/FilterInput/FilterInput.tsx";
import jobIcon from "../../assets/svg/job.svg";
import locationIcon from "../../assets/svg/location.svg";
import industryIcon from "../../assets/svg/Industry.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import "./FilterSidebar.scss";

const FilterSidebar = () => {
  const { setFilters, filterValues } = useListContext();
  const filtersApplied = Object.keys(filterValues).length;

  const [recentSearch, setRecentSearch] = useStore<string[]>(
    "recentSearch",
    []
  );

  useEffect(() => {
    if (
      filterValues.job_title &&
      !recentSearch.includes(filterValues.job_title)
    ) {
      if (recentSearch.length < 4) {
        setRecentSearch([...recentSearch, filterValues.job_title]);
      } else {
        recentSearch.shift();
        setRecentSearch([...recentSearch, filterValues.job_title]);
      }
    }
  }, [filterValues.job_title]);

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
          <TextInput
            source="job_title"
            label="Search by job title"
            alwaysOn
            resettable
            sx={{
              position: "relative",
              "&:before": {
                content: `url(${SearchIcon})`,
                position: "absolute",
                height: "18px",
                top: "25%",
                marginLeft: "12px",
              },
              "& .MuiInputLabel-root": {
                paddingLeft: "24px",
              },
            }}
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
