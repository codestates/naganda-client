import React from 'react';
import logo1 from '../assets/images/logo1.png';
const SignIn = () => {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>LOGIN</h1>
        <div className="social-container naganda-logo">
          <img className="logo-img" src={logo1} alt="logo-image" />
        </div>
        <span className="login-validation">🐝JOIN NOW🐝</span>
        <div className="email">
          <label htmlFor="inputEmail">
            <i className="fas fa-envelope"></i>
          </label>
          <input
            id="inputEmail"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label htmlFor="inputPassword">
            <i className="fas fa-lock"></i>
          </label>
          <input
            id="inputPassword"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <a href="#">Guest Login also available</a>
        <div className="login-btns">
          <button className="normal-btn">LogIn</button>
          <button className="guest-btn">Guest Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
