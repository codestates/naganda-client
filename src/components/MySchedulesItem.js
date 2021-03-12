import React from 'react';
import { Link } from 'react-router-dom';

const MySchedulesItem = ({ schedules }) => {
  return (
    <>
      {schedules.map((card) => (
        <Link to="/scheduler" className="card" key={card.id}>
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${card.thumbnail})`,
            }}
          ></div>
          <div className="card-content">
            <div className="card-title">{card.scheduleTitle}</div>
            <div className="card-snippet">{card.desc}</div>
            <div className="card-readmore">
              <span className="go-schedule">Go to Schedule</span>
              <span className="go-delete">Delete</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default MySchedulesItem;
