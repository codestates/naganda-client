import React from 'react';
import ScCardList from './ScCards/ScCardList';
import AddCard from './ScCards/AddCard';

const ScMorning = () => {
  return (
    <div className="sc-container morning">
      <div className="card-header">
        <h4>🌳Morning</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <ScCardList />
      <AddCard />
    </div>
  );
};

export default ScMorning;
