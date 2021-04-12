import React, { useEffect, useState } from 'react';
import {
  withRouter,
  useHistory,
  useParams,
  Redirect,
  Route,
  Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  myinfoUser,
  getSchedulerInfo,
  updateSchedulerInfo,
} from '../_actions/userAction';

import ScheduleHeader from '../components/Headers/ScheduleHeader';
import Footer from '../components/Footer';
import SchedulerMain from '../components/SchedulePage/SchedulerMain';
import SchedulerHashtags from '../components/SchedulePage/SchedulerHashtags';
import SchedulerBoard from '../components/SchedulePage/SchedulerBoard';

const axios = require('axios');
const DOMAIN = 'http://localhost:4000';
// const DOMAIN = 'http://13.125.241.217:4000';
// const DOMAIN = 'https://s.naganda.tk';

const Scheduler = ({ match, location }) => {
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

  const [AllTags, setAllTags] = useState([]);
  const [MyTitle, setMyTitle] = useState('');
  const [MyCards, setMyCards] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  let params = useParams();

  useEffect(() => {
    if (params.schedulerid) {
      dispatch(getSchedulerInfo(params.schedulerid)).then((res) => {
        console.log('확인해보자!!!', res);
        setThumbnail(res.payload.data.thumbnail);
        setMyTitle(res.payload.data.scheduleTitle);
        setAllTags(res.payload.data.hashtag);
        setMyCards(res.payload.data.detail);
      });
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', Content);

    const token = localStorage.getItem('CC_Token');

    // ! Scheduler ID 가 있을 때는 수정 (Modify) API 로 요청, ID 가 없다면 저장 (Save) API 로 요청
    if (params.schedulerid) {
      dispatch(updateSchedulerInfo(params.schedulerid, formData)).then(
        (res) => {
          setThumbnail(res.payload.data.thumbnail);
          // ! res.payload.data.id 와 params.schedulerid 의 값이 여기서는 같겠지만,
          console.log(res.payload.data.id === params.schedulerid);
          history.push(`/scheduler/${params.schedulerid}`);
        },
      );
    } else {
      axios
        .post(`${DOMAIN}/schedule/save`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUploadedImg({
            filePath: res.data.thumbnail,
          });
          setUserParamsId(res.data.id);
          // localStorage.setItem('SC_id', res.data.id);
          setThumbnail(res.data.thumbnail);
          history.push(`/scheduler/${res.data.id}`);
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('CC_Token');
    if (params.schedulerid) {
      // ! id 가 있을 때는, modify API 로 요청해야함, 단 Thumbnail 은 제외한 채로.
      axios
        .patch(
          `${DOMAIN}/schedule/modify/${params.schedulerid}`,
          {
            scheduleTitle: MyTitle,
            hashtag: AllTags,
            detail: MyCards,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          history.push(`/scheduler/${res.data.id}`);
        })
        .then(() => history.go(0));
    } else {
      axios
        .post(
          `${DOMAIN}/schedule/save`,
          {
            scheduleTitle: MyTitle,
            hashtag: AllTags,
            detail: MyCards,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          // ! 여기서는 데이터를 저장했으니, id 만 받아오면 된다.
          // console.log('여길봐', res.data.data.detail);
          setUserParamsId(res.data.id);
          setMyCards(res.data.data.detail);
          history.push(`/scheduler/${res.data.id}`);
        })
        .then(() => history.go(0))
        .catch((err) => console.log(err));
    }
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

  const getAllTags = (tags) => {
    setAllTags(tags);
  };

  const getTitle = (title) => {
    setMyTitle(title);
  };

  const getDetailCards = (cardArr) => {
    setMyCards(cardArr);
  };

  return (
    <div className="wrapper schedule-page">
      <ScheduleHeader Email={Email} />
      <SchedulerMain
        Avatar={Avatar}
        Thumbnail={Thumbnail}
        setContent={setContent}
        onSubmit={onSubmit}
        UploadedImg={UploadedImg}
        handleSaveData={handleSaveData}
        getTitle={getTitle}
        UserParamsId={UserParamsId}
        MyTitle={MyTitle}
        setMyTitle={setMyTitle}
      />
      <SchedulerHashtags getAllTags={getAllTags} AllTags={AllTags} />
      <SchedulerBoard getDetailCards={getDetailCards} />
      <Footer />
    </div>
  );
};

export default withRouter(Scheduler);
