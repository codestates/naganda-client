import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signinUser } from '../_actions/userAction';

import logo1 from '../assets/images/logo1.png';
const SignIn = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      email: Email,
      password: Password,
    };
    dispatch(signinUser(body))
      .then((res) => {
        console.log(res);
        console.log(res.payload.data.accessToken);
        console.log('리프레시토큰!', res.payload.headers['refresh-token']);
        let tokenData = res.payload.data.accessToken;
        localStorage.setItem('CC_Token', tokenData);

        let refreshTokenData = res.payload.headers['refresh-token'];
        localStorage.setItem('RF_Token', refreshTokenData);
        history.push('/mypage');
      })
      .catch((err) => {
        console.log(err.response);
        setErrorMessage(err.response.data.message);
      });
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={onSubmitHandler}>
        <h1>LOGIN</h1>
        <div className="social-container naganda-logo">
          <img className="logo-img" src={logo1} alt="logo-image" />
        </div>
        {ErrorMessage ? (
          <span className="login-validation">🐝{ErrorMessage}🐝</span>
        ) : (
          <span className="login-validation">🐝JOIN NOW🐝</span>
        )}
        <div className="email">
          <label htmlFor="inputEmail">
            <i className="fas fa-envelope"></i>
          </label>
          <input
            id="inputEmail"
            type="email"
            name="email"
            value={Email}
            onChange={onEmailHandler}
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
            value={Password}
            onChange={onPasswordHandler}
            placeholder="password"
          />
        </div>
        <a href="#">Guest Login also available</a>
        <div className="login-btns">
          <button className="normal-btn" type="submit">
            LogIn
          </button>
          <button className="guest-btn">Guest Login</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
