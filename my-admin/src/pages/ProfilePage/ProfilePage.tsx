import { useRedirect } from "react-admin";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const redirect = useRedirect();

  return (
    <div className="profile">
      <div className="profile__account">
        <button
          className="profile__account__back"
          onClick={() => redirect("/contacts")}
        >
          Back to search
        </button>
        <AccountInfo />
      </div>
      <div className="profile__subs">
        <h1 className="profile__subs__title">Subscription</h1>
        <div className="profile__subs__plan">
          <div className="profile__subs__wrap">
            <h3 className="profile__subs__subtitle">Free Plan</h3>
            <p className="profile__subs__info">
              You are on a free plan and your credits will refresh on May 18,
              2023.
            </p>
          </div>
          <button className="profile__subs__btn">Change plan</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
