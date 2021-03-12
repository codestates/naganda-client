import React from 'react';

const DOMAIN = 'http://localhost:3000';
// const DOMAIN = 'https://naganda.tk';

const SocialLogin = () => {
  const kakaoApi = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=6370162a2378b6dc8ed964549346d472&redirect_uri=${DOMAIN}/signin`;

  const kakaoLoginHandler = () => {
    window.location.assign(kakaoApi);
  };

  return (
    <div className="social-login">
      <h1>Want Social Login?</h1>
      <button className="kakao-btn" type="button" onClick={kakaoLoginHandler}>
        <span className="btn-active">Login with kakao</span>
      </button>
    </div>
  );
};

export default SocialLogin;
