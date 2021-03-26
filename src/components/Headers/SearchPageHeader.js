import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';

const Header = (props) => {
  const headerRef = useRef(null);

  const onScroll = () => {
    headerRef.current.classList.toggle('header-bar', window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);

  return (
    <header ref={headerRef} style={{ backgroundColor: '#fff' }}>
      <Link to="/" className="logo1">
        <img className="logo-img" src={logo1} alt="logo-image" />
      </Link>

      <ul>
        <li>
          <Link to="/signin" className="searchPageHeaderBanner-login-btn">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signin" className="searchPageHeaderBanner-signup-btn">
            Signup
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default withRouter(Header);
