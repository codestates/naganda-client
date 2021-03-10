import React from 'react';
import PmCardList from './ScCards/PmCardList';
import AddCard from './ScCards/AddCard';

const ScAfternoon = ({ AfternoonList }) => {
  return (
    <div className="sc-container afternoon">
      <div className="card-header">
        <h4>🍄Afternoon</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <PmCardList AfternoonList={AfternoonList} />
      <AddCard />
    </div>
  );
};

export default ScAfternoon;
