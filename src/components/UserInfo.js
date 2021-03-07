import React, { useState } from 'react';

import avatar from '../assets/images/amongus_white.png';

import ModifyNickname from './PopupModify/ModifyNickname';
import ModifyEmail from './PopupModify/ModifyEmail';
import ModifyPassword from './PopupModify/ModifyPassword';

import WithdrawalService from './PopupWithdrawal/WithdrawalService';
const UserInfo = (props) => {
  const [Modify, setModify] = useState({
    nickname: false,
    email: false,
    password: false,
    withdrawal: false,
  });

  const toggleModifyNickname = () => {
    setModify({
      nickname: !Modify.nickname,
    });
  };

  const toggleModifyEmail = () => {
    setModify({
      email: !Modify.email,
    });
  };

  const toggleModifyPassword = () => {
    setModify({
      password: !Modify.password,
    });
  };

  const toggleWithdrawal = () => {
    setModify({
      withdrawal: !Modify.withdrawal,
    });
  };

  return (
    <section className="mypage">
      <div className="profile-section">
        <h1 className="mypage-title">Profile</h1>

        <div className="mypage-info">
          <div className="avatar-name">
            <div className="avatar">
              <img className="avatar-img" src={avatar} alt="user-avatar" />
              <button className="btn-avatar-modify" type="button">
                <i className="fas fa-plus-circle"></i>
              </button>
            </div>
            <div className="username-title">
              <h1>{props.nickname}</h1>
            </div>
          </div>
          <div className="white-space"></div>
          <div className="info">
            <div className="wrap-modify">
              <span className="block small">Nickname : {props.nickname}</span>
              <button
                className="modify light"
                disabled={Modify.nickname}
                onClick={toggleModifyNickname}
              >
                Modify
              </button>
            </div>
            {Modify.nickname && (
              <ModifyNickname toggleModifyNickname={toggleModifyNickname} />
            )}

            <div className="wrap-modify">
              <span className="block small">E-mail : {props.email}</span>
              <button
                className="modify light"
                disabled={Modify.email}
                onClick={toggleModifyEmail}
              >
                Modify
              </button>
            </div>
            {Modify.email && (
              <ModifyEmail toggleModifyEmail={toggleModifyEmail} />
            )}

            <div className="wrap-modify">
              <span className="block small">Change Password</span>
              <button
                className="modify light"
                disabled={Modify.password}
                onClick={toggleModifyPassword}
              >
                Modify
              </button>
            </div>
            {Modify.password && (
              <ModifyPassword toggleModifyPassword={toggleModifyPassword} />
            )}

            <div className="wrap-modify delete">
              <span className="block small">Delete Userinfo</span>
              <button
                className="modify light"
                disabled={Modify.withdrawal}
                onClick={toggleWithdrawal}
              >
                Delete
              </button>
            </div>
            {Modify.withdrawal && (
              <WithdrawalService toggleWithdrawal={toggleWithdrawal} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
