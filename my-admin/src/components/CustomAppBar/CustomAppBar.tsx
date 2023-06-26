import { Count, useListParams } from "react-admin";
import { useLocation } from "react-router-dom";
import "./CustomAppBar.scss";

const CustomAppBar = () => {
  const location = useLocation();
  const [listParams] = useListParams({
    resource: "contacts",
  });

  return (
    <header className="header">
      <div className="header__logo-wrap">
        <h1 className="header__logo">logo</h1>
      </div>
      {location.pathname !== "/profile" && (
        <div className="header__total-wrap">
          <div className="header__total">Total</div>
          <div className="header__total-count">
            {<Count resource="contacts" filter={listParams.filter} />}
          </div>
        </div>
      )}
    </header>
  );
};

export default CustomAppBar;
