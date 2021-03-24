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
          변경하기
        </button>
        {/* <button className="btn-closed" onClick={toggleModifyNickname}>
          X
        </button> */}
        <button className="btn-closed" onClick={toggleModifyNickname}>
          <i className="far fa-minus-square"></i>
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="changeNickname">새로운 닉네임을 입력해 주세요.</label>
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
