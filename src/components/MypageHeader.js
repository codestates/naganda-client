import React, { useRef, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../_actions/userAction';

import { Link } from 'react-router-dom';

import logo1 from '../assets/images/logo1.png';

const axios = require('axios');

const MypageHeader = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const headerRef = useRef(null);

  const handleLogout = () => {
    const token = localStorage.getItem('CC_Token');
    // console.log('로그아웃 시의 토큰입니다', token);

    const data = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    let userEmail = props.email;

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
      localStorage.removeItem('CC_Token');
      localStorage.removeItem('RF_Token');
      history.push('/');
    }
  };

  const onScroll = () => {
    headerRef.current.classList.toggle('sticky', window.scrollY > 0);
  };

  useEffect(() => {
    // console.log(headerRef.current);
    // console.log(headerRef);
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
          <button className="login-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </header>
  );
};

export default withRouter(MypageHeader);
