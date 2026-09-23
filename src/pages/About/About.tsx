import css from './About.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';

export default function About() {
  return (
    <>
      <Header />
      <section>
        <Container>
          <h1>About</h1>
        </Container>
      </section>
      <Footer />
    </>
  );
}
