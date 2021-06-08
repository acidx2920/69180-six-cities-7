import React from 'react';
import {NavLink} from 'react-router-dom';

function Logo() {
  return (
    <NavLink className="header__logo-link" to="/" activeClassName="header__logo-link--active">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </NavLink>
  );
}

export default Logo;
