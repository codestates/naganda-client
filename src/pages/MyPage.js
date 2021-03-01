import React, { useEffect } from 'react';

import Header from '../components/Header';
import UserInfo from '../components/UserInfo';
import Schedules from '../components/Schedules';
import Footer from '../components/Footer';

const MyPage = () => {
  const onScroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
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
