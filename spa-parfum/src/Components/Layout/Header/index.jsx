import React from 'react';
import { Link } from 'react-router-dom';

import cart from 'images/cart.png';

import './styles.css';

const Header = () => (
  <header className="header">
    <div className="header_container">
      <div className="header_nav">
        <Link to="/" className="header_nav_logo">
          Логотип
        </Link>
        <div className="header_nav_description">
          <div className="header_nav_link">
            <Link to="/showcase" className="header_description_link header_color1">
              Витрина
            </Link>
            <Link to="/client" className="header_description_link header_color2">
              Как стать клиентом
            </Link>
          </div>
          <div className="header_nav_link">
            <Link to="/women" className="header_description_link header_color3">
              Для женщин
            </Link>
            <Link to="/men" className="header_description_link header_color4">
              Для мужчин
            </Link>
            <Link to="/child" className="header_description_link header_color5">
              Для детей
            </Link>
          </div>
        </div>
        <Link to="/cart" className="header_cart">
          <img src={cart} alt="Cart" /> {/* <Link to='/cart'><img src={cart} alt="Cart" /></Link> */}
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
