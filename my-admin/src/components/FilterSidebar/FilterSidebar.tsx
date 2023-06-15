import { FilterLiveSearch } from "react-admin";
// import dataProvider from "../../dataProvider";
import "./FilterSidebar.scss";

const FilterSidebar = () => {
  // dataProvider.getCountries().then((data) => console.log(data));
  return (
    <div className="filters">
      <h3 className="filters__title">Filters</h3>
      <div className="filters__wrapper">
        <div className="filters__job">
          <h4 className="filters__subtitle">Job title</h4>
          <FilterLiveSearch
            source="job_title"
            placeholder="Search by job title"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
