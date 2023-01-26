import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
