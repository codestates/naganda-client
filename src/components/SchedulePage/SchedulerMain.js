import React from 'react';
import Avatar from '../../assets/images/amongus_white.png';

const SchedulerMain = () => {
  return (
    <section className="schedule-banner">
      <div className="schedule-info">
        <div className="schedule-avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="schedule-title">
          <h2>
            미슐랭 2스타🌟🌟 정식당에서 운영하는 정식바, 연인과 혹은 친구와
            분위기를 내면 좋은 곳이다! 하지만 혼자 가도 그 분위기를 120% 느낄 수
            있다!🚨🚨 치즈에🧀🧀 레드와인🍷🍷 감튀🍟 면 모든게 끝난다!
          </h2>
          <div className="thumbs">
            <i className="fas fa-thumbs-up">
              <span>7</span>
            </i>
            <i className="fas fa-thumbs-down">
              <span>2</span>
            </i>
          </div>
        </div>
      </div>
      <div className="shortcut-icons">
        <div className="add-thumbnail">
          <i className="fas fa-images"></i>
          <i className="fas fa-edit"></i>
        </div>
        <div className="bookmark-share">
          <i className="far fa-star"></i>
          <i className="far fa-share-square"></i>
        </div>
      </div>
    </section>
  );
};

export default SchedulerMain;
