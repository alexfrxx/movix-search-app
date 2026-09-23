import css from './404.module.css';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <section className={css.notFound}>
        <Container>
          <h1 className={css.title}>404</h1>
          <p className={css.subtitle}>Page not found</p>
        </Container>
      </section>
      <Footer />
    </>
  );
}
