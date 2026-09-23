import css from './SupportList.module.css';
import { Link } from 'react-router';

export default function SupportList() {
  return (
    <ul className={css.list}>
      <h3>About</h3>
      <li>
        <Link to="/terms" className={css.supportLink}>
          Terms
        </Link>
      </li>
      <li>
        <Link to="/policy" className={css.supportLink}>
          Privacy policy
        </Link>
      </li>
      <li>
        <Link to="/support" className={css.supportLink}>
          Support
        </Link>
      </li>
      <li>
        <Link to="/contact" className={css.supportLink}>
          Contact us
        </Link>
      </li>
    </ul>
  );
}
