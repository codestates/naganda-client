import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../assets/images/logo1.png';

const UnauthorizedPopup = () => {
  const history = useHistory();
  return (
    <div id="popup">
      <div>
        <button onClick={() => history.push('/signin')}>
          Let&apos;s go to SIGNUP
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <h1>이런!🚨🚨 해당 페이지는 인증된 회원들만 접근이 가능합니다🤗</h1>
        <span>간편 가입으로 나간다의 모든 서비스를 이용하실 수 있습니다!</span>
      </div>
      <label htmlFor="popup"></label>
    </div>
  );
};

export default UnauthorizedPopup;
