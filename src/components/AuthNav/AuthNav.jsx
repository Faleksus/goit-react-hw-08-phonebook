import Login from "pages/LoginPage";
import Register from "pages/RegisterPage";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <section className={css.sectionAuthNav}>
      <NavLink
        className={css.btnAuthNav}
        to="/register"
        component={<Register />}
      >
        Register
      </NavLink>
      <NavLink className={css.btnAuthNav} to="/login" component={<Login />}>
        LogIn
      </NavLink>
    </section>
  );
};
