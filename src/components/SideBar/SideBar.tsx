import css from './SideBar.module.css';
import { Link } from 'react-router';

export default function SideBar() {
  return (
    <aside className={css.sidebar}>
      <nav>
        <Link to="/" className={css.link}>
          <svg width="30" height="30" className={css.icon}>
            <use href="./sprite.svg#tv"></use>
          </svg>
          <p>
            Movi<span className={css.red}>X</span>
          </p>
        </Link>
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
      </nav>
    </aside>
  );
}
