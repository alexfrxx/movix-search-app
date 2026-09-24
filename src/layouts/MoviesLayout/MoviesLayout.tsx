import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import css from './MoviesLayout.module.css';
import Container from '../../components/Container/Container';

export default function MoviesLayout() {
  return (
    <section className={css.movies}>
      <Container>
        <div className={css.wrapper}>
          <SideBar />
          <Outlet />
        </div>
      </Container>
      <Footer />
    </section>
  );
}
