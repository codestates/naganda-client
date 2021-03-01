import React from 'react';
import { Link } from 'react-router-dom';

import logo1 from '../assets/images/logo1.png';

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo1">
        <img className="logo-img" src={logo1} alt="logo-image" />
      </Link>
      <ul>
        <li>
          <Link to="/signin" className="login-btn">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signin" className="signup-btn">
            Signup
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
