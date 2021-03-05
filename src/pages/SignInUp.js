import React, { useRef, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SocialLogin from '../components/SocialLogin';

const axios = require('axios');
const SignInUp = () => {
  const containerRef = useRef(null);
  const signUpBtnRef = useRef(null);
  const signInBtnRef = useRef(null);

  const history = useHistory();

  const onToggle = () => {
    signUpBtnRef.current.addEventListener('click', () => {
      containerRef.current.classList.add('right-panel-active');
    });
    signInBtnRef.current.addEventListener('click', () => {
      containerRef.current.classList.remove('right-panel-active');
    });
  };

  useEffect(async () => {
    const getAccessToken = async (authorizationCode) => {
      let tokenData = await axios
        .post('http://localhost:4000/users/kakao', {
          authorizationCode,
        })
        .then((res) => {
          console.log(res.data.accessToken);
          let accessToken = res.data.accessToken;
          let refreshToken = res.headers['refresh-token'];
          localStorage.setItem('CC_Token', accessToken);
          localStorage.setItem('RF_Token', refreshToken);
          history.push('/mypage');
        });
    };
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    console.log('인증 코드', authorizationCode);
    if (authorizationCode) {
      await getAccessToken(authorizationCode);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', onToggle);
    return () => window.removeEventListener('click', onToggle);
  }, [containerRef, signInBtnRef, signUpBtnRef]);

  return (
    <div className="wrapper-container">
      <div className="container" id="container" ref={containerRef}>
        <SignUp />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Already Have an Account?</h1>
              <p>나간다를 즐길 준비가 되셨나요? 로그인하러 갑시다!</p>
              <button className="ghost" id="signIn" ref={signInBtnRef}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Don&apos;t have an Account?</h1>
              <p>이메일과 비밀번호 만으로 간편한 가입을 할 수 있습니다.</p>
              <button className="ghost" id="signUp" ref={signUpBtnRef}>
                Sign Up
              </button>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
