import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo1.png';

const ModifyNickname = ({ toggleModifyNickname, modifyUserInfo }) => {
  const [NewNickname, setNewNickname] = useState('');

  const onChangeNickname = (e) => {
    setNewNickname(e.target.value);
  };

  return (
    <div id="modify">
      <div>
        <button
          className="btn-changed"
          onClick={() => modifyUserInfo({ nickname: NewNickname })}
        >
          Make A Change
        </button>
        <button className="btn-closed" onClick={toggleModifyNickname}>
          X
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="changeNickname">
            Input Your New Nickname below🍭
          </label>
          <input
            id="changeNickname"
            type="text"
            onChange={onChangeNickname}
            defaultValue={NewNickname}
          />
        </form>
      </div>
      <label className="bottom-label" htmlFor="modify"></label>
    </div>
  );
};

export default ModifyNickname;
