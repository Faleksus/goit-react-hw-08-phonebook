import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <section className={css.sectionAppBar}>
      <div className={css.containerAppBar}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </section>
  );
};
