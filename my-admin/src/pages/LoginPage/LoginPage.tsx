import LoginForm from "../../components/LoginForm/LoginForm";
import PhotosFirst from "../../assets/png/2.png";
import PhotosSecond from "../../assets/png/1.png";
import PhotosThird from "../../assets/png/3.png";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__wrap">
        <h1 className="login__title">Login to lorem ipsum</h1>
        <p className="login__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <LoginForm />
      </div>
      <div className="logo">
        <div className="logo__img__wrap">
          <img className="logo__img_first" src={PhotosFirst} alt="photos" />
          <img className="logo__img_second" src={PhotosSecond} alt="photos" />
          <img className="logo__img_third" src={PhotosThird} alt="photos" />
        </div>
        <h1 className="logo__logo">logo</h1>
        <p className="logo__text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
