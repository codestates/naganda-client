import React, { useRef, useEffect } from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import SocialLogin from '../components/SocialLogin';

const SignInUp = () => {
  const containerRef = useRef(null);
  const signUpBtnRef = useRef(null);
  const signInBtnRef = useRef(null);

  const onToggle = () => {
    signUpBtnRef.current.addEventListener('click', () => {
      containerRef.current.classList.add('right-panel-active');
    });
    signInBtnRef.current.addEventListener('click', () => {
      containerRef.current.classList.remove('right-panel-active');
    });
  };

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
