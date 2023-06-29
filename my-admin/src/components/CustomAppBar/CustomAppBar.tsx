import { useGetList, useListParams } from "react-admin";
import { useLocation } from "react-router-dom";
import { numberFormatter } from "../../helper";
import { useState } from "react";
import "./CustomAppBar.scss";

const CustomAppBar = () => {
  const location = useLocation();
  const [listParams] = useListParams({
    resource: "contacts",
  });
  const [isUnit, setIsUnit] = useState<boolean>(true);

  const { total } = useGetList("contacts", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "company", order: "DESC" },
    filter: listParams.filter,
  });

  return (
    <header className="header">
      <div className="header__logo-wrap">
        <h1
          className="header__logo"
          style={
            location.pathname !== "/profile"
              ? { borderRight: "1px solid #e7e8ef" }
              : { borderBottom: "1px solid #e7e8ef" }
          }
        >
          logo
        </h1>
      </div>
      <div className="header__wrap">
        {location.pathname !== "/profile" && (
          <div className="header__total-wrap">
            <div className="header__total">Total</div>
            <div className="header__total-count">
              {isUnit ? numberFormatter(total!) : total}
            </div>
          </div>
        )}
        <button
          className="header__btn"
          onClick={() => {
            isUnit ? setIsUnit(false) : setIsUnit(true);
          }}
        >
          KM
        </button>
      </div>
    </header>
  );
};

export default CustomAppBar;
