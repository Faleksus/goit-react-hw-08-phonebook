import css from './HomePage.module.css';

const Home = () => {
  return (
    <section className={css.sectionHome}>
      <h2 className={css.headerHome}>
        Phonebook <b>Welcome page.</b> <b>Please, register or login.</b>
      </h2>
    </section>
  );
};

export default Home;
