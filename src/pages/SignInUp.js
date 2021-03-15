import React, { useRef, useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SocialLogin from '../components/SocialLogin';

const axios = require('axios');
const SignInUp = () => {
  const containerRef = useRef(null);
  const signUpBtnRef = useRef(null);
  const signInBtnRef = useRef(null);

  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();

  // const DOMAIN = 'http://localhost:4000';
  // const DOMAIN = 'http://13.125.241.217:4000';
  const DOMAIN = 'https://naganda.tk';

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
        .post(`${DOMAIN}/users/kakao`, {
          authorizationCode,
        })
        .then((res) => {
          // console.log(res.data);
          let accessToken = res.data.accessToken;
          let refreshToken = res.headers['refresh-token'];
          localStorage.setItem('CC_Token', accessToken);
          localStorage.setItem('RF_Token', refreshToken);
        })
        .then(() => {
          dispatch(myinfoUser())
            .then((res) => {
              // console.log('응답페이로드 데이터', res.payload.data);
              let userinfo = res.payload.data;
              // console.log(userinfo);
              setNickname(userinfo.nickname);
              setEmail(userinfo.email);
              const headEmail = userinfo.email.split('@')[0];
              // console.log('내가 바로 이메일접두사', headEmail);
              history.push(`/mypage/:${headEmail}?detail=true`);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    };
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    // console.log('인증 코드', authorizationCode);
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

export default withRouter(SignInUp);
