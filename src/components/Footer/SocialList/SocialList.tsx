import css from './SocialList.module.css';

export default function SocialList() {
  return (
    <ul className={css.list}>
      <h3>Social</h3>
      <li>
        <a
          href="https://discord.com/"
          target="blank"
          className={css.supportLink}
        >
          Discord
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="blank"
          className={css.supportLink}
        >
          FaceBook
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com"
          target="blank"
          className={css.supportLink}
        >
          Linkedin
        </a>
      </li>
      <li>
        <a href="https://x.com/" target="blank" className={css.supportLink}>
          X(Twitter)
        </a>
      </li>
    </ul>
  );
}
