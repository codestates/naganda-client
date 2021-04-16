import React from 'react';
import { Link } from 'react-router-dom';

const MySchedulesItem = ({ schedules }) => {
  const mock = '/images/mockup-thumb4.jpg';
  return (
    <>
      {schedules.map((card) => (
        <Link
          to={card._id === 1 || card._id === 2 ? '#' : `/scheduler/${card._id}`}
          className="card"
          key={card._id}
        >
          {card.thumbnail ? (
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${card.thumbnail})`,
              }}
            ></div>
          ) : (
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${mock})`,
              }}
            ></div>
          )}
          <div className="card-content">
            <div className="card-title">{card.scheduleTitle}</div>
            <div className="card-snippet">
              카드를 클릭하면 스케줄러 페이지로 이동합니다.
            </div>
            <div className="card-readmore">
              <span className="go-schedule">Go to Schedule</span>
              {/* <span className="go-delete">Delete</span> */}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MySchedulesItem;
