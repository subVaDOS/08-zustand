import css from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Manokha Vadym</p>
          <p>
            Contact us:
            <Link href="mailto:manokha@vadim@gmail.com">manokha@vadim@gmail.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
