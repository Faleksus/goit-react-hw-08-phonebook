import css from './HomePage.module.css';

const Home = () => {
  return (
    <section className={css.sectionHome}>
      <h2 className={css.headerHome}>
        Вітаю у Phonebook <b>Якщо в твоєму Phonebook є номер Шольца</b> <b>Ти знаеш що робити &#128521;</b>
      </h2>
    </section>
  );
};

export default Home;
