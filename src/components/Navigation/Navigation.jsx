import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/selectors";
import Home from "pages/HomePage/HomePage";
import { Contact } from "components/Contact/Contact";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <section className={css.sectionNavigation}>
      <NavLink className={css.btnNavigation} to="/" component={<Home />}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={css.btnNavigation}
          to="/contacts"
          component={<Contact />}
        >
          Contacts
        </NavLink>
      )}
    </section>
  );
};
