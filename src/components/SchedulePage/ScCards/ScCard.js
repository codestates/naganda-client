import React from 'react';

const ScCard = ({ type, detailTitle, time, place, comment }) => {
  return (
    <div className="sc-card">
      <div className="card-infos">
        <div className="card-info">
          <h4>{detailTitle}</h4>
          <span className="time">
            Estimated time:{type} {time}
          </span>
        </div>
        <span className="btn-closed">
          <i className="far fa-trash-alt"></i>
        </span>
      </div>
      <div className="text-content">{comment}</div>
      <div className="address-info">
        <h4>{place}</h4>
        <i className="fas fa-map-marker-alt"></i>
      </div>
    </div>
  );
};

export default ScCard;
