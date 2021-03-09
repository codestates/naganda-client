import React from 'react';
import MidCardList from './ScCards/MidCardList';
import AddCard from './ScCards/AddCard';

const ScNight = ({ MidnightList }) => {
  return (
    <div className="sc-container night">
      <div className="card-header">
        <h4>🌝Night</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <MidCardList MidnightList={MidnightList} />
      <AddCard />
    </div>
  );
};

export default ScNight;
