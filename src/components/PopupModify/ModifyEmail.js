import React, { useState } from 'react';
import Logo from '../../assets/images/logo1.png';

const ModifyEmail = ({ toggleModifyEmail, modifyUserInfo, match }) => {
  const [NewEmail, setNewEmail] = useState('');

  const onChangeEmail = (e) => {
    setNewEmail(e.target.value);
  };
  return (
    <div id="modify">
      <div>
        <button
          className="btn-changed"
          onClick={() => {
            modifyUserInfo({ email: NewEmail });
            console.log(match);
            let newParam = NewEmail.split('@')[0];
            match.params.username = `:${newParam}`;
          }}
        >
          변경하기
        </button>
        <button className="btn-closed" onClick={toggleModifyEmail}>
          <i className="far fa-minus-square"></i>
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="changeEmail">새로운 이메일을 입력해 주세요.</label>
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
