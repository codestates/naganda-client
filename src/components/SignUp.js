import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/userAction';

import logo1 from '../assets/images/logo1.png';

const SignUp = (props) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [NickName, setNickName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const history = useHistory();

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNickNameHandler = (e) => {
    setNickName(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password === ConfirmPassword) {
      let body = {
        email: Email,
        nickname: NickName,
        password: Password,
      };
      dispatch(registerUser(body))
        .then((res) => {
          if (res.payload.data) {
            console.log('응답', res.payload);
            setErrorMessage(res.payload.data.message);
          } else {
            console.log('회원가입이 이루어졌습니다 >>>>>', res);
            setErrorMessage('⏪⏪이제 로그인하러 가볼까용?🍄');
            // history.push('/signin');
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('비밀번호가 일치하지 않습니다.');
      setErrorMessage('비밀번호가 일치하지 않네요 🍭');
    }
  };
  return (
    <div className="form-container sign-up-container">
      <form onSubmit={onSubmitHandler}>
        <h1>Create Account</h1>
        <div className="social-container naganda-logo">
          <img className="logo-img" src={logo1} alt="logo-image" />
        </div>
        {ErrorMessage ? (
          <span>{ErrorMessage}</span>
        ) : (
          <span>이메일, 닉네임 만으로 간편한 회원가입을!</span>
        )}
        <input
          type="email"
          name="email"
          value={Email}
          onChange={onEmailHandler}
          placeholder="Email"
        />
        <input
          type="text"
          name="nickname"
          value={NickName}
          onChange={onNickNameHandler}
          placeholder="Nickname"
        />
        <input
          type="password"
          name="password"
          value={Password}
          onChange={onPasswordHandler}
          placeholder="Password"
        />
        <input
          type="password"
          name="name"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
          placeholder="Confirm Password"
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
