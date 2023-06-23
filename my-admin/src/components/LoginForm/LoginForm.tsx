import { useLogin, useNotify } from "react-admin";
import { useState } from "react";
import OpenEyeIcon from "../../assets/svg/icon-open-eye.svg";
import ClosedEyeIcon from "../../assets/svg/icon-eye.svg";
import "./LoginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  const toggleVisibility = () => {
    const passwordInput = document.querySelector(
      ".password-input"
    ) as HTMLInputElement;
    const showBtn = document.querySelector(
      ".login-form__show-btn"
    ) as HTMLButtonElement;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showBtn.style.backgroundImage = `url(${OpenEyeIcon})`;
    } else {
      passwordInput.type = "password";
      showBtn.style.backgroundImage = `url(${ClosedEyeIcon})`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="email" className="login-form__label">
        Email
        <input
          className="login-form__input"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className="login-form__label">
        Password
        <input
          className="login-form__input password-input"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        type="button"
        className="login-form__show-btn"
        onClick={toggleVisibility}
      />
      <input type="submit" className="login-form__submit" value="Login" />
    </form>
  );
};

export default LoginForm;
