import React from 'react';
import AmCardList from './ScCards/AmCardList';
import AddCard from './ScCards/AddCard';

const ScMorning = ({ MorningList }) => {
  return (
    <div className="sc-container morning">
      <div className="card-header">
        <h4>🌳Morning</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <AmCardList MorningList={MorningList} />
      <AddCard />
    </div>
  );
};

export default ScMorning;
