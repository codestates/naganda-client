import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import ScheduleHeader from '../components/Headers/ScheduleHeader';
import Footer from '../components/Footer';
import SchedulerMain from '../components/SchedulePage/SchedulerMain';
import SchedulerHashtags from '../components/SchedulePage/SchedulerHashtags';
import SchedulerBoard from '../components/SchedulePage/SchedulerBoard';

import MockData from '../components/mock/ScheduleListData';

const Scheduler = () => {
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [Avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  console.log('목업데이터', MockData);

  useEffect(() => {
    dispatch(myinfoUser())
      .then((res) => {
        let userinfo = res.payload.data;
        setNickname(userinfo.nickname);
        setEmail(userinfo.email);
        setAvatar(userinfo.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="wrapper">
      <ScheduleHeader Email={Email} />
      <SchedulerMain />
      <SchedulerHashtags />
      <SchedulerBoard />
      <Footer />
    </div>
  );
};

export default withRouter(Scheduler);
