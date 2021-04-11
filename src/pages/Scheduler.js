import React, { useEffect, useState } from 'react';
import { withRouter, useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser, getSchedulerInfo } from '../_actions/userAction';

import ScheduleHeader from '../components/Headers/ScheduleHeader';
import Footer from '../components/Footer';
import SchedulerMain from '../components/SchedulePage/SchedulerMain';
import SchedulerHashtags from '../components/SchedulePage/SchedulerHashtags';
import SchedulerBoard from '../components/SchedulePage/SchedulerBoard';

const axios = require('axios');
const DOMAIN = 'http://localhost:4000';
// const DOMAIN = 'http://13.125.241.217:4000';
// const DOMAIN = 'https://s.naganda.tk';

const Scheduler = ({ match }) => {
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [Avatar, setAvatar] = useState('');

  const [Thumbnail, setThumbnail] = useState('');
  // ! Thumbnail 의 초기 값을 여기서 먼저 설정해 주어야 할까?
  const [Content, setContent] = useState('');
  const [UploadedImg, setUploadedImg] = useState({
    filePath: '',
  });
  const [UserParamsId, setUserParamsId] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  let params = useParams();
  // console.log(params.schedulerid);
  // params.schedulerid

  useEffect(() => {
    let sc_id = localStorage.getItem('SC_id');
    if (sc_id !== null) {
      dispatch(getSchedulerInfo(sc_id)).then((res) =>
        setThumbnail(res.payload.data.thumbnail),
      );
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', Content);

    const token = localStorage.getItem('CC_Token');

    axios
      .post(`${DOMAIN}/schedule/save`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log('파일 들어간다!', res.data);

        setUploadedImg({
          filePath: res.data.thumbnail,
        });
        setUserParamsId(res.data.id);
        localStorage.setItem('SC_id', res.data.id);
        setThumbnail(res.data.thumbnail);

        history.go(0);
      })
      .catch((err) => console.log(err));
  };

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
    <div className="wrapper schedule-page">
      <ScheduleHeader Email={Email} />
      <SchedulerMain
        Avatar={Avatar}
        Thumbnail={Thumbnail}
        setContent={setContent}
        onSubmit={onSubmit}
        UploadedImg={UploadedImg}
      />
      <SchedulerHashtags />
      <SchedulerBoard />
      <Footer />
    </div>
  );
};

export default withRouter(Scheduler);
