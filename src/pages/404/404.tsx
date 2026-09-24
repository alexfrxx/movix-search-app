import css from './404.module.css';

import Container from '../../components/Container/Container';

export default function NotFound() {
  return (
    <section className={css.notFound}>
      <Container>
        <h1 className={css.title}>404</h1>
        <p className={css.subtitle}>Page not found</p>
      </Container>
    </section>
  );
}
