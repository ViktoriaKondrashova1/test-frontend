import "./SubsPopup.scss";

const SubsPopup = () => {
  const closePopUp = () => {
    const popUp = document.querySelector<HTMLElement>(".popup");
    popUp!.style.opacity = "0";
    popUp!.style.visibility = "hidden";
  };

  return (
    <div className="popup">
      <div className="popup__content">
        <button className="popup__close" onClick={closePopUp} />
        <div className="popup__icon" />
        <h1 className="popup__title">Upgarde now</h1>
        <p className="popup__text">
          You are on limited version which allows viewing up to 100 contacts.
          Upgrade your plan to view all pages.
        </p>
        <button className="popup__upgrade-btn">Upgrade</button>
        <button className="popup__later-btn" onClick={closePopUp}>
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default SubsPopup;
