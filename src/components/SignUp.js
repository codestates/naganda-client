import React from 'react';

import logo1 from '../assets/images/logo1.png';

const SignUp = () => {
  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <div className="social-container naganda-logo">
          <img className="logo-img" src={logo1} alt="logo-image" />
        </div>
        <span>이메일만으로 간편한 회원가입!</span>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="name" placeholder="Again Password" />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
