import React, { useState } from 'react';
import Logo from '../../assets/images/logo1.png';

const ModifyPassword = ({ toggleModifyPassword }) => {
  const [NewPassword, setNewPassword] = useState('');

  const onChangePassword = (e) => {
    setNewPassword(e.target.value);
  };
  return (
    <div id="modify">
      <div>
        <button className="btn-changed">Make A Change</button>
        <button className="btn-closed" onClick={toggleModifyPassword}>
          X
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="changePassword">Input Your New PW below🔐</label>
          <input
            id="changePassword"
            type="password"
            onChange={onChangePassword}
            defaultValue={NewPassword}
          />
        </form>
      </div>
      <label className="bottom-label" htmlFor="modify"></label>
    </div>
  );
};

export default ModifyPassword;
