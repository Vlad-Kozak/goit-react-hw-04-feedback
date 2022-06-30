import s from './Section.module.css';

const Section = ({ children, title }) => (
  <section className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
