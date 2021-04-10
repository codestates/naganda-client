import React, { useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../_actions/userAction';

import ModifyNickname from './PopupModify/ModifyNickname';
import ModifyEmail from './PopupModify/ModifyEmail';
import ModifyPassword from './PopupModify/ModifyPassword';
import ModifyAvatar from './PopupModify/ModifyAvatar';

import WithdrawalService from './PopupWithdrawal/WithdrawalService';

const UserInfo = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

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

  const modifyUserInfo = (body) => {
    dispatch(updateUserInfo(body))
      .then((res) => {
        // window.location.reload();
        history.go(0);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="mypage">
      <div className="profile-section">
        <h1 className="mypage-title">My Profile</h1>

        <div className="mypage-info">
          <div className="avatar-name">
            <ModifyAvatar
              modifyUserInfo={modifyUserInfo}
              avatar={props.avatar}
              setContent={props.setContent}
              onSubmit={props.onSubmit}
              UploadedImg={props.UploadedImg}
            />
            <div className="username-title">
              <h1>{props.nickname}</h1>
            </div>
          </div>
          <div className="white-space"></div>
          <div className="info">
            <div className="wrap-modify">
              <span className="block small">🍄Nickname : {props.nickname}</span>
              <button
                className="modify light"
                disabled={Modify.nickname}
                onClick={toggleModifyNickname}
              >
                Edit
              </button>
            </div>
            {Modify.nickname && (
              <ModifyNickname
                toggleModifyNickname={toggleModifyNickname}
                modifyUserInfo={modifyUserInfo}
              />
            )}

            <div className="wrap-modify">
              <span className="block small">📮E-mail : {props.email}</span>
              <button
                className="modify light"
                disabled={Modify.email}
                onClick={toggleModifyEmail}
              >
                Edit
              </button>
            </div>
            {Modify.email && (
              <ModifyEmail
                toggleModifyEmail={toggleModifyEmail}
                modifyUserInfo={modifyUserInfo}
                match={props.match}
              />
            )}

            <div className="wrap-modify">
              <span className="block small">🔐Change Password</span>
              <button
                className="modify light"
                disabled={Modify.password}
                onClick={toggleModifyPassword}
              >
                Edit
              </button>
            </div>
            {Modify.password && (
              <ModifyPassword
                toggleModifyPassword={toggleModifyPassword}
                modifyUserInfo={modifyUserInfo}
              />
            )}

            <div className="wrap-modify delete">
              <span className="block small">✋Delete Userinfo</span>
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

export default withRouter(UserInfo);
