import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';

import cart from '../images/cart.png';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header_nav">
        <Link to="/" className="header_nav_logo">
          Логотип
        </Link>
        <div className="header_nav_description">
          <div className="header_nav_link">
            <Link to="/showcase" className="description_link color1">
              Витрина
            </Link>
            <Link to="/client" className="description_link color2">
              Как стать клиентом
            </Link>
          </div>
          <div className="header_nav_link">
            <Link to="/women" className="description_link color3">
              Для женщин
            </Link>
            <Link to="/men" className="description_link color4">
              Для мужчин
            </Link>
            <Link to="/child" className="description_link color5">
              Для детей
            </Link>
          </div>
        </div>
        <Link to="/cart" className="cart">
          <img src={cart} alt="Cart" /> {/* <Link to='/cart'><img src={cart} alt="Cart" /></Link> */}
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
