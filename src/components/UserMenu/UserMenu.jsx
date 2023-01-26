import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <div>Welcome, {user.name}</div>
      <button
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        LogOut
      </button>
    </div>
  );
};
