import { Navigation } from "components/Navigations/Navigation";
import { useSelector } from "react-redux";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";

export const AppBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
