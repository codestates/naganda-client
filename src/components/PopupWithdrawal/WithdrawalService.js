import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unregisterUser } from '../../_actions/userAction';

import Logo from '../../assets/images/logo1.png';

const WithdrawalService = ({ toggleWithdrawal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUnregister = () => {
    dispatch(unregisterUser())
      .then((res) => {
        console.log(res);
        console.log('회원탈퇴가 되었군요..');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="modify">
      <div>
        <button className="btn-changed" onClick={handleUnregister}>
          Yes, I want
        </button>
        <button className="btn-closed" onClick={toggleWithdrawal}>
          X
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 style={{ color: 'red', paddingBottom: '10px' }}>
            회원탈퇴는 신중히 생각해 주세요😭
          </h2>
          <label htmlFor="changeNickname">
            Are You Sure to Quit from our Service?
          </label>
        </form>
      </div>
      <label className="bottom-label" htmlFor="modify"></label>
    </div>
  );
};

export default withRouter(WithdrawalService);
