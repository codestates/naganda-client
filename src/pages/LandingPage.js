import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import Header from '../components/Headers/Header';
import SearchBanner from '../components/SearchBanner';
import Recommended from '../components/Recommended';
import IntroDesc from '../components/IntroDesc';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.localStorage.CC_Token) {
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
    } else {
      return;
    }
  }, []);

  return (
    <div className="wrapper">
      <Header Nickname={Nickname} Email={Email} />
      <SearchBanner />
      <Recommended />
      <IntroDesc />
      <Footer />
    </div>
  );
};

export default withRouter(LandingPage);
