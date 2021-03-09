import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../_actions/userAction';
import logo1 from '../../assets/images/logo1.png';

const Header = (props) => {
  const headerRef = useRef(null);
  const dispatch = useDispatch();

  const Email = props.Email;
  const headEmail = Email.split('@')[0];
  const onScroll = () => {
    if (headerRef.current !== null) {
      headerRef.current.classList.toggle('sticky', window.scrollY > 0);
    } else {
      console.log('HeaderRef.current is NULL');
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);

  const handleLogout = () => {
    let numberOfGuestWords = Email.split('@').filter((el) => {
      return el.includes('guest');
    }).length;

    if (numberOfGuestWords === 2) {
      dispatch(logoutUser())
        .then((res) => {
          console.log('당신은 게스트이므로 유저정보를 모두 삭제합니다.', res);
          localStorage.removeItem('CC_Token');
          localStorage.removeItem('RF_Token');
          window.location.replace('/');
        })
        .catch((err) => console.log(err));
    } else {
      console.log('로그아웃이 되었습니다.');
      localStorage.removeItem('CC_Token');
      localStorage.removeItem('RF_Token');
      window.location.replace('/');
    }
  };

  return (
    <header ref={headerRef}>
      <Link to="/" className="logo1">
        <img className="logo-img" src={logo1} alt="logo-image" />
      </Link>
      {props.Email ? (
        <ul>
          <li>
            <Link to={'/scheduler'} className="scheduler-btn">
              Scheduler
            </Link>
          </li>
          <li>
            <Link
              to={`/mypage/:${headEmail}?detail=true`}
              className="login-btn"
            >
              MyPage
            </Link>
          </li>
          <li>
            <Link to="#" className="signup-btn" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
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
      )}
    </header>
  );
};

export default withRouter(Header);
