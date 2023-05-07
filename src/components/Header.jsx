import React from 'react';
import { Link } from "react-router-dom";

// Компонент Шапки
function Header () {
  const [isToggleBurgerButton, setToggleBurgerButton] = React.useState(false);

  function handleToggleBurgerButton() {
    setToggleBurgerButton(!isToggleBurgerButton);
  }

  return (
    <header className={`header page__header ${isToggleBurgerButton ? 'header_opened' : ''}`}>
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
      <button className='header__burger-button' onClick={handleToggleBurgerButton}>
        <span className='header__burger-span'></span>
        <span className='header__burger-span'></span>
        <span className='header__burger-span'></span>
      </button>
    </header>
  );
}

export default Header;
