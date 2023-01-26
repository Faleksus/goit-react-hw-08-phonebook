import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useState } from 'react';
import css from './RegisterForm.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
    };

    dispatch(register(formData));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.sectionRegisterForm}>
      <h1 className={css.headerRegisterForm}>Registration</h1>
      <form className={css.formRegisterForm} onSubmit={handleSubmit}>
        <label className={css.labelRegisterForm}>
          <h3>Name:</h3>
          <input
            className={css.inputRegisterForm}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={css.labelRegisterForm}>
          <h3>E-mail:</h3>
          <input
            className={css.inputRegisterForm}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className={css.labelRegisterForm}>
          <h3>Password:</h3>
          <input
            className={css.inputRegisterForm}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button className={css.btnRegisterForm} type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
