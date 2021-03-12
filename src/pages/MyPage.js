import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myinfoUser } from '../_actions/userAction';

import MypageHeader from '../components/Headers/MypageHeader';
import UserInfo from '../components/UserInfo';
import MySchedulesList from '../components/MySchedulesList';
import Footer from '../components/Footer';
import UnauthorizedPopup from '../components/UnauthorizedPopup';

import queryString from 'query-string';

const axios = require('axios');
// const DOMAIN = 'http://localhost:4000';
const DOMAIN = 'http://13.125.241.217:4000';
const MyPage = ({ location, match }) => {
  const query = queryString.parse(location.search);
  // console.log('쿼리', query);
  // console.log(match.params);
  // const detail = query.detail === 'true';
  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [Avatar, setAvatar] = useState('');

  const dispatch = useDispatch();

  const [Content, setContent] = useState('');
  const [UploadedImg, setUploadedImg] = useState({
    fileName: '',
    filePath: Avatar,
  });

  const accessToken = localStorage.getItem('CC_Token');

  // ! 유저 아바타 변경을 위한 onSubmit 그리고 Content 와 UploadedImg (using useState)
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', Content);

    const token = localStorage.getItem('CC_Token');

    axios
      .patch(`${DOMAIN}/users/updateUserinfo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log('파일 들어간다!', res.data);
        setUploadedImg({
          fileName: res.data.fileName,
          filePath: res.data.filePath,
        });
        window.location.reload();
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
    <div className="wrapper">
      <MypageHeader email={Email} />
      <UserInfo
        nickname={Nickname}
        email={Email}
        setContent={setContent}
        onSubmit={onSubmit}
        UploadedImg={UploadedImg}
        avatar={Avatar}
      />
      <MySchedulesList />
      {!accessToken && <UnauthorizedPopup />}
      <Footer />
    </div>
  );
};

export default withRouter(MyPage);
