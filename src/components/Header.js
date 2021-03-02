import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo1 from '../assets/images/logo1.png';

const Header = () => {
  const headerRef = useRef(null);

  const onScroll = () => {
    headerRef.current.classList.toggle('sticky', window.scrollY > 0);
  };

  useEffect(() => {
    console.log(headerRef.current);
    console.log(headerRef);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);

  return (
    <header ref={headerRef}>
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
