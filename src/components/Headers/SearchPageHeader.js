import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';

const Header = (props) => {
  const headerRef = useRef(null);
  //   const headEmail = Email.split('@')[0];
  const onScroll = () => {
    headerRef.current.classList.toggle('sticky', window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);

  return (
    <header ref={headerRef} style={{ backgroundColor: '#262626' }}>
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

export default withRouter(Header);
