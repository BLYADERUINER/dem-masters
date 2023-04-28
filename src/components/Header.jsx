import { Link } from "react-router-dom";

// Компонент Header
function Header() {
  return (
    <header className="header page__header">
      <Link style={{textDecoration: 'none'}}>
        <div className="header__container">
          <img className="header__logo" src="./logo.png" alt="Логотип" />
          <h2 className="header__title">Dem Masters</h2>
        </div>
      </Link>
      <nav className="header__navigation">
        <Link className="header__link">О нас</Link>
        <Link className="header__link">Галерея</Link>
        <Link className="header__link">Отзывы</Link>
        <Link className="header__link">Контакты</Link>
      </nav>
    </header>
  );
}

export default Header;
