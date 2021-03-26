import React, { useState } from 'react';
import Logo from '../../assets/images/logo1.png';

const ModifyPassword = ({ toggleModifyPassword, modifyUserInfo }) => {
  const [NewPassword, setNewPassword] = useState('');
  const [RePassword, setRePassword] = useState('');

  const onChangePassword = (e) => {
    setNewPassword(e.target.value);
  };

  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };
  return (
    <div id="modify">
      <div>
        <button
          className="btn-changed"
          onClick={() => {
            if (NewPassword !== RePassword) {
              console.log('패스워드가 서로 다릅니다!');
              return;
            }
            modifyUserInfo({ password: NewPassword });
          }}
          style={{ marginTop: '10px' }}
        >
          변경하기
        </button>
        <button className="btn-closed" onClick={toggleModifyPassword}>
          <i className="far fa-minus-square"></i>
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()} style={{ paddingTop: 0 }}>
          <label
            htmlFor="changePassword"
            style={{ paddingBottom: '10px', marginTop: '10px' }}
          >
            {NewPassword !== RePassword
              ? '비밀번호를 동일하게 입력하세요'
              : '새로운 비밀번호를 입력해 주세요.'}
          </label>
          <input
            id="changePassword"
            type="password"
            onChange={onChangePassword}
            defaultValue={NewPassword}
            placeholder="변경할 비밀번호 입력"
            style={{ marginTop: '10px' }}
          />
          <input
            id="changeRePassword"
            type="password"
            onChange={onChangeRePassword}
            defaultValue={RePassword}
            placeholder="비밀번호 재입력"
            style={{ marginTop: '5px' }}
          />
        </form>
      </div>
      <label className="bottom-label" htmlFor="modify"></label>
    </div>
  );
};

export default ModifyPassword;
