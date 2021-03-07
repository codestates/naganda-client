import React, { useState } from 'react';
import Logo from '../../assets/images/logo1.png';

const ModifyEmail = ({ toggleModifyEmail }) => {
  const [NewEmail, setNewEmail] = useState('');

  const onChangeEmail = (e) => {
    setNewEmail(e.target.value);
  };
  return (
    <div id="modify">
      <div>
        <button className="btn-changed">Make A Change</button>
        <button className="btn-closed" onClick={toggleModifyEmail}>
          X
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="changeEmail">Input Your New Email below📨</label>
          <input
            id="changeEmail"
            type="text"
            onChange={onChangeEmail}
            defaultValue={NewEmail}
          />
        </form>
      </div>
      <label className="bottom-label" htmlFor="modify"></label>
    </div>
  );
};

export default ModifyEmail;