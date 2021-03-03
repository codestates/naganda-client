import React, { useEffect } from 'react';

import MypageHeader from '../components/MypageHeader';
import UserInfo from '../components/UserInfo';
import Schedules from '../components/Schedules';
import Footer from '../components/Footer';

const MyPage = () => {
  return (
    <div className="wrapper">
      <MypageHeader />
      <UserInfo />
      <Schedules />
      <Footer />
    </div>
  );
};

export default MyPage;
