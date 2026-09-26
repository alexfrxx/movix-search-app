import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';

export default function MoviesLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
