import { useLogout } from "react-admin";
import "./AccountInfo.scss";

const AccountInfo = () => {
  const logout = useLogout();

  return (
    <div className="account">
      <div className="account__header">
        <h1 className="account__title">Account info</h1>
        <button className="account__logout" onClick={() => logout()}>
          Log out
        </button>
      </div>
      <div className="account__body">
        <form className="account__form">
          <label htmlFor="firstName" className="account__label">
            First Name
            <input
              className="account__input"
              name="firstName"
              type="text"
              defaultValue="John"
            />
          </label>
          <label htmlFor="lastName" className="account__label">
            Last Name
            <input
              className="account__input"
              name="lastName"
              type="text"
              defaultValue="Doe"
            />
          </label>
        </form>
        <div className="account__data-wrap">
          <p className="account__data-wrap__data">john.doe@gmail.com</p>
          <button className="account__data-wrap__btn">Change email</button>
        </div>
        <div className="account__data-wrap">
          <p className="account__data-wrap__data">***********</p>
          <button className="account__data-wrap__btn">Change password</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
