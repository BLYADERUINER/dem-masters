import { Link } from "react-router-dom";

function Footer () {
  return(
    <footer className="footer">
      <p className="footer__text">&copy;&nbsp;2023 Dem-Masters</p>
      <div className="footer__container">
        <Link className="footer__link" to='https://github.com/BLYADERUINER' target="_blank">GitHub</Link>
        <Link className="footer__link" to='https://t.me/blyaderuiner' target="_blank">Telegram</Link>
      </div>
    </footer>
  );
}

export default Footer;
