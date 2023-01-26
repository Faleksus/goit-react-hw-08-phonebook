import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { useEffect } from 'react';

export const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  const getVisibleContacts = changeFilter();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {getVisibleContacts.map(({ id, name, number }) => {
        return (
          <div className={css.contactItem}>
            <Contact key={id} name={name} number={number} />
            <button
              type="button"
              className={css.btn}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <p>
        Total number of contacts in the phonebook: {getVisibleContacts.length}
      </p>
    </ul>
  );
};
