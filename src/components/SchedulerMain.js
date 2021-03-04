import React from 'react';
import MainBackgroundImg from '../assets/images/London.jpg';
import AvatarImg from '../assets/images/user.svg';
import Like from '../assets/images/like.svg';
import Unlike from '../assets/images/unlike.svg';

const SchedulerMain = () => {
  return (
    <>
      <article>
        <img
          className="sch-main-bg"
          src={MainBackgroundImg}
          alt="mainBackgroundImage"
        />
        <article className="sch-user-func">
          <i className="fas fa-plus-circle"></i>
          <i className="far fa-bookmark"></i>
          <i className="far fa-share-square"></i>
        </article>
      </article>

      <article className="sch-user">
        <span className="sch-user-msg">
          <img className="sch-user-msg-img" src={AvatarImg} alt="avatarImage" />
          <span className="sch-user-msg-comment">
            nagagand99 님의 나간다의 2/26 대보름 먹방투어 PLAN!!!
          </span>
          <article className="sch-user-thums">
            <img src={Like} alt="likeImage" />
            <span className="sch-user-thumsNum">12</span>
            <img src={Unlike} alt="unlikeImage" />
            <span>24</span>
          </article>
        </span>
      </article>
    </>
  );
};

export default SchedulerMain;
