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

  const [MorningList, setMorningList] = useState([]);
  const [AfternoonList, setAfternoonList] = useState([]);
  const [MidnightList, setMidnightList] = useState([]);
  const [EmptyList, setEmptyList] = useState([]);

  const dispatch = useDispatch();

  // console.log('아침계획리스트', MorningList);
  // console.log('오후계획리스트', AfternoonList);
  // console.log('심야계획리스트', MidnightList);

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

  useEffect(() => {
    let morning = [];
    let afternoon = [];
    let midnight = [];
    let empty = [];
    MockData.map((data) => {
      if (data.type === 'am') {
        morning.push(data);
      } else if (data.type === 'pm') {
        afternoon.push(data);
      } else if (data.type === 'mid') {
        midnight.push(data);
      } else if (data.type === 'empty') {
        empty.push(data);
      }
    });
    setMorningList(morning);
    setAfternoonList(afternoon);
    setMidnightList(midnight);
    setEmptyList(empty);
  }, []);
  return (
    <div className="wrapper">
      <ScheduleHeader Email={Email} />
      <SchedulerMain />
      <SchedulerHashtags />
      <SchedulerBoard
        MorningList={MorningList}
        AfternoonList={AfternoonList}
        MidnightList={MidnightList}
        EmptyList={EmptyList}
      />
      <Footer />
    </div>
  );
};

export default withRouter(Scheduler);
