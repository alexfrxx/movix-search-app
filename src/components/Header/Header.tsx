import { Link } from 'react-router';
import { RiMenuFold3Line } from 'react-icons/ri';
import css from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  return (
    <header>
      <Container>
        <nav className={css.navigation}>
          <Link to="/" className={css.link}>
            <svg width="30" height="30" className={css.icon}>
              <use href="./sprite.svg#tv"></use>
            </svg>
            <p>
              Movi<span className={css.red}>X</span>
            </p>
          </Link>

          <div className={css.menu}>
            <RiMenuFold3Line className={css.menuIcon} />

            <ul className={css.list}>
              <li>
                <Link to="/" className={css.item}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={css.item}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className={css.item}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/policy" className={css.item}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className={css.item}>
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/support" className={css.item}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
}
