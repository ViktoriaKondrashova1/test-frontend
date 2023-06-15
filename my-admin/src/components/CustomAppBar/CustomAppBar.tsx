import "./CustomAppBar.scss";

const CustomAppBar = () => {
  const totalCount = "453.8K";
  return (
    <div className="header">
      <div className="header__logo-wrap">
        <h1 className="header__logo">logo</h1>
      </div>
      <div className="header__total">Total</div>
      <div className="header__total-count">{totalCount}</div>
    </div>
  );
};

export default CustomAppBar;
