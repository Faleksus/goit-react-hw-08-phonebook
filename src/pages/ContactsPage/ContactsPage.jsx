import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import css from './ContactsPage.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <section className={css.sectionPhonebook}>
          <h2 className={css.sectionHeader}>Phonebook</h2>

          <ContactForm />
        </section>

        <Filter />

        <section className={css.sectionContacts}>
          <h2 className={css.sectionHeader}>Contacts</h2>
          <ContactList />
        </section>
      </div>
    </>
  );
}

export default Contacts;
