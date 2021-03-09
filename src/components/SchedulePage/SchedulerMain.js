import React from 'react';
import Avatar from '../../assets/images/cooking-point.jpeg';

const SchedulerMain = () => {
  return (
    <section className="schedule-banner">
      <div className="schedule-info">
        <div className="schedule-avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div className="schedule-title">
          <h2>
            ✈️도토리묵 님의 3월 20일 이국적인 카페 돌아보기 PLAN😋☕️ 산
            히네스는 과연 대한민국에서 맛볼 수 있을까?🤔
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
