import { TextInput, Form, useRedirect, useStore } from "react-admin";
import FilterInput from "../../components/Inputs/FilterInput/FilterInput";
import FiltersImg from "../../assets/png/filters-img.png";
import RecentImg from "../../assets/png/recent-img.png";
import jobIcon from "../../assets/svg/job.svg";
import locationIcon from "../../assets/svg/location.svg";
import industryIcon from "../../assets/svg/Industry.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import "./HomePage.scss";

const HomePage = () => {
  const redirect = useRedirect();
  const [recentSearch] = useStore<string[]>("recentSearch", []);

  return (
    <div className="home-page__wrap">
      <Form className="home-page__form">
        <div className="filters__title-wrap">
          <h3 className="filters__title">Filters</h3>
        </div>
        <div className="filters__wrapper">
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={jobIcon} alt="job icon" />
            Job title
          </h4>
          <TextInput
            source="job_title"
            label={false}
            placeholder="Search by job title"
            onChange={(e) =>
              redirect(
                `/contacts?displayedFilters=%5B%5D&filter=%7B"job_title"%3A"${e.target.value}"%7D&order=ASC&page=1&perPage=10&sort=company`
              )
            }
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
          <div className="filters__line" />
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={locationIcon} alt="job icon" />
            Location
          </h4>
          <FilterInput
            source="country"
            label="Choose location"
            url="contacts/countries"
            onChange={(value) =>
              redirect(
                `/contacts?displayedFilters=%5B%5D&filter=%7B"country"%3A"${value}"%7D&order=ASC&page=1&perPage=10&sort=company`
              )
            }
            alwaysOn
          />
          <div className="filters__line" />
          <h4 className="filters__subtitle">
            <img className="filters__icon" src={industryIcon} alt="job icon" />
            Industry
          </h4>
          <FilterInput
            source="industry"
            label="Choose industry"
            url="contacts/industries"
            onChange={(value) =>
              redirect(
                `/contacts?displayedFilters=%5B%5D&filter=%7B"industry"%3A"${value}"%7D&order=ASC&page=1&perPage=10&sort=company`
              )
            }
            alwaysOn
          />
        </div>
      </Form>
      <div className="home-page">
        <div className="home-page__add-filters">
          <div className="add-filters__arrow" />
          <p className="add-filters__text">Add filters to begin your search</p>
        </div>
        <div className="home-page__filters-info">
          <img src={FiltersImg} alt="filters" className="filters-info__img" />
          <p className="filters-info__text">
            Start your people search by applying any filter in the left panel
          </p>
        </div>
        <div className="home-page__recent">
          <h3 className="recent__title">Recent searches</h3>
          {recentSearch.length > 0 ? (
            <ul className="recent__list">
              {recentSearch.map((item, index) => (
                <li
                  key={index}
                  className="recent__item"
                  onClick={() =>
                    redirect(
                      `/contacts?displayedFilters=%5B%5D&filter=%7B"job_title"%3A"${item}"%7D&order=ASC&page=1&perPage=10&sort=company`
                    )
                  }
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <>
              <img src={RecentImg} alt="recent" className="recent__img" />
              <p className="recent__text">
                Your last four searches will be here for quick access
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
