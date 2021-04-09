import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, useHistory } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../_actions/userAction';
const Header = (props) => {
  const headerRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  let userEmail = props.email;
  const onScroll = () => {
    if (headerRef.current !== null) {
      headerRef.current.classList.toggle('header-bar', window.scrollY > 0);
    } else {
      // console.log('HeaderRef.current is NULL');
      return;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);
  const handleLogout = () => {
    let numberOfGuestWords = userEmail.split('@').filter((el) => {
      return el.includes('guest');
    }).length;
    if (numberOfGuestWords === 2) {
      dispatch(logoutUser())
        .then((res) => {
          console.log('당신은 게스트이므로 유저정보를 모두 삭제합니다.', res);
          localStorage.removeItem('CC_Token');
          localStorage.removeItem('RF_Token');
          history.push('/');
        })
        .catch((err) => console.log(err));
    } else {
      console.log('로그아웃이 되었습니다.');
      localStorage.removeItem('CC_Token');
      localStorage.removeItem('RF_Token');
      history.push('/');
    }
  };

  const token = localStorage.getItem('CC_Token');

  return (
    <header ref={headerRef} style={{ backgroundColor: '#fff' }}>
      <Link to="/" className="logo1">
        <img className="logo-img" src={logo1} alt="logo-image" />
      </Link>
      <ul>
        {!token ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <Link
                to="#"
                className="searchPageHeaderBanner-login-btn"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
            <li>
              <Link
                to="/scheduler"
                className="searchPageHeaderBanner-signup-btn"
              >
                Scheduler
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
export default withRouter(Header);
