import css from './404.module.css';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';

export default function NotFound() {
  return (
    <>
      <section className={css.notFound}>
        <Container>
          <h1 className={css.title}>Not Found</h1>
        </Container>
      </section>
      <Footer />
    </>
  );
}
