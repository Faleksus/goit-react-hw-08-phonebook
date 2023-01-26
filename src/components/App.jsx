import { useEffect } from "react";
import { refreshThunk } from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// import { Layout } from "./Latout/Layout";
// import { RestrictedRoute } from "./RestrictedRoute";
import HomePage from "../pages/HomePage/HomePage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import LoginPage from "./LoginForm/LoginForm";
import ContactsPage from "../pages/ContactsPage/ContactsPage";

// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
// const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
// const LoginPage = lazy(() => import("./LoginForm/LoginForm"));
// const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector((state) => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Routes>
      {/* <Route path="/" element={<Layout />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" component={<LoginPage />} redirectTo="/contacts" />
      <Route
        path="/contacts"
        component={<ContactsPage />}
        redirectTo="/login"
      />
    </Routes>
  );
};
