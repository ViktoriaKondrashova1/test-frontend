import "./NoResults.scss";

const NoResults = () => {
  return (
    <div className="no-results">
      <div className="no-results__img" />
      <h2 className="no-results__title">No results found</h2>
      <p className="no-results__text">
        We couldn’t find what you searched for. <br />
        Please try again.
      </p>
      <button className="no-results__btn">Clear filters</button>
    </div>
  );
};

export default NoResults;
