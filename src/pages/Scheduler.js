import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import ScheduleHeader from '../components/Headers/ScheduleHeader';
import Footer from '../components/Footer';
import SchedulerMain from '../components/SchedulerMain';
import SchedulerHashtags from '../components/SchedulerHashtags';
import SchedulerBoard from '../components/SchedulerBoard';

const Scheduler = () => {
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [Avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

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
      <section className="sch-wrapper">
        <SchedulerMain />
        <article className="sch">
          <SchedulerHashtags />
          <SchedulerBoard />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default withRouter(Scheduler);
