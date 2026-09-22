import css from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header>
      <Container>
        <nav>
          <ul className={css.navigation}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
