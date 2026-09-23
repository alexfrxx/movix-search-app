import css from './Footer.module.css';
import Container from '../Container/Container';
import SupportList from './SupportList/SupportList';
import DownloadList from './DownloadList/DownloadList';
import FooterLogo from './FooterLogo/FooterLogo';
import Copyright from './Copyright/Copyright';
import SocialList from './SocialList/SocialList';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <ul className={css.list}>
          <li className={css.item}>
            <FooterLogo />
          </li>
          <li className={css.item}>
            <SupportList />
          </li>
          <li className={css.item}>
            <SocialList />
          </li>
          <li className={css.item}>
            <DownloadList />
          </li>
        </ul>
        <Copyright />
      </Container>
    </footer>
  );
}
