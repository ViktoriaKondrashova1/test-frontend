import { Count } from "react-admin";
import "./CustomAppBar.scss";

const CustomAppBar = () => {
  const filters = localStorage.getItem("RaStore.contacts.listParams");

  return (
    <header className="header">
      <div className="header__logo-wrap">
        <h1 className="header__logo">logo</h1>
      </div>
      <div className="header__total-wrap">
        <div className="header__total">Total</div>
        <div className="header__total-count">
          {
            <Count
              resource="contacts"
              filter={filters ? JSON.parse(filters).filter : {}}
            />
          }
        </div>
      </div>
    </header>
  );
};

export default CustomAppBar;
