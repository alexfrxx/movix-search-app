import { Link } from 'react-router';
import { RiMenuFold3Line } from 'react-icons/ri';
import { useState, useRef, useEffect } from 'react';
import css from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <header>
      <Container>
        <div ref={menuRef}>
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

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={css.phoneButton}
            >
              <RiMenuFold3Line className={css.menuIcon} />
            </button>
          </nav>
          {isMenuOpen && (
            <div className={css.phoneMenu}>
              <ul className={css.phoneList}>
                <li>
                  <Link to="/" className={css.phoneItem}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={css.phoneItem}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={css.phoneItem}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/policy" className={css.phoneItem}>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className={css.phoneItem}>
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/support" className={css.phoneItem}>
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
