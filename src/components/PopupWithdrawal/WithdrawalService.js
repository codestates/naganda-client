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
        localStorage.removeItem('CC_Token');
        localStorage.removeItem('RF_Token');
        history.push('/');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="modify">
      <div>
        <button className="btn-changed" onClick={handleUnregister}>
          네, 탈퇴합니다.
        </button>
        <button className="btn-closed" onClick={toggleWithdrawal}>
          <i className="far fa-minus-square"></i>
        </button>
        <img className="logo1" src={Logo} alt="logo" />
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 style={{ paddingBottom: '20px' }}>
            <span style={{ color: 'red' }}>회원탈퇴</span>는 신중히 생각해
            주세요
          </h2>
          <label htmlFor="changeNickname">
            <span style={{ lineHeight: '1.2em' }}>
              아래의 버튼을 눌러주세요. <br />
              탈퇴 이후
              <u style={{ color: 'red' }}> 계정은 복구되지 않습니다.</u>
            </span>
          </label>
        </form>
      </div>
      <label className="bottom-label" htmlFor="modify"></label>
    </div>
  );
};

export default withRouter(WithdrawalService);
