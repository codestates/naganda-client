import React from 'react';
import ScCardList from './ScCards/ScCardList';
import AddCard from './ScCards/AddCard';

const ScNight = () => {
  return (
    <div className="sc-container night">
      <div className="card-header">
        <h4>🌝Night</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="sc-card">
        <div className="card-infos">
          <div className="card-info">
            <h4>Wine & Beer🍺🍷</h4>
            <span className="time">Estimated time:PM 20:00</span>
          </div>
          <span className="btn-closed">
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
        <div className="text-content">
          I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
          lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
          Junghwan are all nice people!
        </div>
        <div className="address-info">
          <h4>Yeongdongdaero, 622, Samsung - 1 dong</h4>
          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
      <div className="sc-card">
        <div className="card-infos">
          <div className="card-info">
            <h4>Wine & Beer🍺🍷</h4>
            <span className="time">Estimated time:PM 20:00</span>
          </div>
          <span className="btn-closed">
            <i className="far fa-trash-alt"></i>
          </span>
        </div>
        <div className="text-content">
          I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
          lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
          Junghwan are all nice people!
        </div>
        <div className="address-info">
          <h4>Yeongdongdaero, 622, Samsung - 1 dong</h4>
          <i className="fas fa-map-marker-alt"></i>
        </div>
      </div>
      <AddCard />
    </div>
  );
};

export default ScNight;
