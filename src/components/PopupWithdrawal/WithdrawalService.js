import React, { useState } from 'react';
import Logo from '../../assets/images/logo1.png';

const WithdrawalService = ({ toggleWithdrawal }) => {
  return (
    <div id="modify">
      <div>
        <button className="btn-changed">Yes, I want</button>
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

export default WithdrawalService;
