import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import MypageHeader from '../components/MypageHeader';
import UserInfo from '../components/UserInfo';
import Schedules from '../components/Schedules';
import Footer from '../components/Footer';

const MyPage = () => {
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myinfoUser())
      .then((res) => {
        console.log(res.payload.data);
        let userinfo = res.payload.data;
        setNickname(userinfo.nickname);
        setEmail(userinfo.email);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="wrapper">
      <MypageHeader email={Email} />
      <UserInfo nickname={Nickname} email={Email} />
      <Schedules />
      <Footer />
    </div>
  );
};

export default withRouter(MyPage);
