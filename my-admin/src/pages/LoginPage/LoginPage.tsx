import LoginForm from "../../components/LoginForm/LoginForm";
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
      <div className="login__logo">1</div>
    </div>
  );
};

export default LoginPage;
