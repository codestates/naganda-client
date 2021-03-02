import React, { useEffect } from 'react';

import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Schedules from '../components/Schedules';
import Footer from '../components/Footer';

const MyPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <UserInfo />
      <Schedules />
      <Footer />
    </div>
  );
};

export default MyPage;
