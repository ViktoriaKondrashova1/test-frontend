import { useState } from "react";
import { useDataProvider } from "react-admin";
import "./CustomAppBar.scss";

const CustomAppBar = () => {
  const dataProvider = useDataProvider();
  const [total, setTotal] = useState<number | undefined>(0);
  dataProvider
    .getList("contacts", {
      pagination: { page: 1, perPage: 10 },
      sort: { field: "job_title", order: "ASC" },
      filter: {},
    })
    .then((data) => setTotal(data.total));
  return (
    <div className="header">
      <div className="header__logo-wrap">
        <h1 className="header__logo">logo</h1>
      </div>
      <div className="header__total-wrap">
        <div className="header__total">Total</div>
        <div className="header__total-count">{total}</div>
      </div>
    </div>
  );
};

export default CustomAppBar;
