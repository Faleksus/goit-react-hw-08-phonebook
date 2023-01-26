import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    dispatch(logIn(formData));

    setEmail("");
    setPassword("");
  };

  return (
    <div className={css.sectionLoginForm}>
      <h2 className={css.headerLoginForm}>LogIn</h2>
      <form className={css.formLoginForm} onSubmit={handleSubmit}>
        <label>
          <h3>E-mail:</h3>
          <input
            className={css.inputLoginForm}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <h3>Password:</h3>
          <input
          className={css.inputLoginForm}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className={css.btnLoginForm} type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default RegisterPage;