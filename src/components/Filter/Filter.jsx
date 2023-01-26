import { changeFilter } from 'redux/contacts/filter.slice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <section className={css.sectionFilter}>
      <h2 className={css.sectionHeader}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </section>
  );
};
