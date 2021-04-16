import React, { useRef, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../_actions/userAction';

import { Link } from 'react-router-dom';

import logo1 from '../../assets/images/logo1.png';

const MypageHeader = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const headerRef = useRef(null);
  let userEmail = props.email;

  const handleLogout = () => {
    let numberOfGuestWords = userEmail.split('@').filter((el) => {
      return el.includes('guest');
    }).length;

    if (numberOfGuestWords === 2) {
      dispatch(logoutUser())
        .then((res) => {
          console.log('당신은 게스트이므로 유저정보를 모두 삭제합니다.', res);
          let sc_id = localStorage.getItem('SC_id');
          if (sc_id) {
            localStorage.removeItem('SC_id');
          }
          localStorage.removeItem('CC_Token');
          localStorage.removeItem('RF_Token');
          history.push('/');
        })
        .catch((err) => console.log(err));
    } else {
      console.log('로그아웃이 되었습니다.');
      let sc_id = localStorage.getItem('SC_id');
      if (sc_id) {
        localStorage.removeItem('SC_id');
      }
      localStorage.removeItem('CC_Token');
      localStorage.removeItem('RF_Token');
      history.push('/');
    }
  };

  const onScroll = () => {
    if (headerRef.current !== null) {
      headerRef.current.classList.toggle('sticky', window.scrollY > 0);
    } else {
      // console.log('HeaderRef.current is NULL');
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [headerRef]);

  const token = localStorage.getItem('CC_Token');

  return (
    <header ref={headerRef}>
      <Link to="/" className="logo1">
        <img className="logo-img" src={logo1} alt="logo-image" />
      </Link>
      <ul>
        <li>
          <Link to={'/scheduler'} className="scheduler-btn2">
            Scheduler
          </Link>
        </li>
        {token ? (
          <li>
            <Link to="#" className="login-btn" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <button
              className="login-btn"
              onClick={() => history.push('/signin')}
            >
              SignIn
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default withRouter(MypageHeader);
