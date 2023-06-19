import { useGetList } from "react-admin";
import { numberFormatter } from "../../helper";
import "./CustomAppBar.scss";

const CustomAppBar = () => {
  const { total } = useGetList("contacts", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "job_title", order: "ASC" },
    filter: JSON.parse(localStorage.getItem("RaStore.contacts.listParams")!)
      .filter,
  });

  return (
    <div className="header">
      <div className="header__logo-wrap">
        <h1 className="header__logo">logo</h1>
      </div>
      <div className="header__total-wrap">
        <div className="header__total">Total</div>
        <div className="header__total-count">
          {total ? numberFormatter(total) : 0}
        </div>
      </div>
    </div>
  );
};

export default CustomAppBar;
