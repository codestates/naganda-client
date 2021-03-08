import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import MypageHeader from '../components/MypageHeader';
import UserInfo from '../components/UserInfo';
import Schedules from '../components/Schedules';
import Footer from '../components/Footer';
import UnauthorizedPopup from '../components/UnauthorizedPopup';

import queryString from 'query-string';
const MyPage = ({ location, match }) => {
  const query = queryString.parse(location.search);
  // console.log('쿼리', query);
  // console.log(match.params);
  // const detail = query.detail === 'true';
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myinfoUser())
      .then((res) => {
        // console.log('응답페이로드 데이터', res.payload.data);
        let userinfo = res.payload.data;
        setNickname(userinfo.nickname);
        setEmail(userinfo.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="wrapper">
      <MypageHeader email={Email} />
      {Email ? (
        <>
          <UserInfo nickname={Nickname} email={Email} />
          <Schedules />
        </>
      ) : (
        <>
          <UserInfo nickname={Nickname} email={Email} />
          <Schedules />
          <UnauthorizedPopup />
        </>
      )}

      <Footer />
    </div>
  );
};

export default withRouter(MyPage);
