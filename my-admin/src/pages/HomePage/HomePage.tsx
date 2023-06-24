import FiltersImg from "../../assets/png/filters-img.png";
import RecentImg from "../../assets/png/recent-img.png";
import "./HomePage.scss";

const HomePage = () => {
  return (
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
        <img src={RecentImg} alt="recent" className="recent__img" />
        <p className="recent__text">
          Your last four searches will be here for quick access
        </p>
      </div>
    </div>
  );
};

export default HomePage;
