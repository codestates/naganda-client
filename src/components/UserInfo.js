import React from 'react';

import avatar from '../assets/images/amongus_white.png';
const UserInfo = () => {
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
              <h1>Kwangmook</h1>
            </div>
          </div>
          <div className="white-space"></div>
          <div className="info">
            <div className="wrap-modify">
              <span className="block small">Nickname : Kwangmook Jung</span>
              <button className="modify light">Modify</button>
            </div>

            <div className="wrap-modify">
              <span className="block small">
                E-mail : seolleung22@gmail.com
              </span>
              <button className="modify light">Modify</button>
            </div>

            <div className="wrap-modify">
              <span className="block small">Change Password</span>
              <button className="modify light">Modify</button>
            </div>

            <div className="wrap-modify delete">
              <span className="block small">Delete Userinfo</span>
              <button className="modify light">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
