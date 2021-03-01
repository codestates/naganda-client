import React, { useEffect } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SocialLogin from '../components/SocialLogin';

import logo1 from '../assets/images/logo1.png';

const SignInUp = () => {
  const onToggle = () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  };
  useEffect(() => {
    window.addEventListener('click', onToggle);
    return () => window.removeEventListener('click', onToggle);
  }, []);

  return (
    <div className="wrapper-container">
      <div className="container" id="container">
        <SignUp />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Already Have an Account?</h1>
              <p>나간다를 즐길 준비가 되셨나요? 로그인하러 갑시다!</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Don&apos;t have an Account?</h1>
              <p>이메일과 비밀번호 만으로 간편한 가입을 할 수 있습니다.</p>
              <button className="ghost" id="signUp">
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
