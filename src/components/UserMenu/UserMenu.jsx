import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <section className={css.sectionUserMenu}>
      <h2 className={css.headerUserMenu}>
        Welcome, {user.name}
      </h2>
      <button
      className={css.btnUserMenu}
        type="button"
        onClick={() => dispatch(logOut())}
        to="/register"
      >
        LogOut
      </button>
    </section>
  );
};
