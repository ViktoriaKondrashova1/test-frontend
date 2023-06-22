import { useLogin, useNotify } from "react-admin";
import { useState } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <div className="login">
      <div className="login__form">
        <h1 className="login__form__title">Login to lorem ipsum</h1>
        <p className="login__form__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <form onSubmit={handleSubmit} className="login__form__wrap">
          <label htmlFor="email" className="login__form__label">
            Email
            <input
              className="login__form__input"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="login__form__label">
            Password
            <input
              className="login__form__input"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input type="submit" className="login__form__submit" value="Login" />
        </form>
      </div>
      <div className="login__logo">1</div>
    </div>
  );
};

export default LoginPage;
