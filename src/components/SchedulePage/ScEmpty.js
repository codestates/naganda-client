import React from 'react';
import ScCardList from './ScCards/ScCardList';
import AddCard from './ScCards/AddCard';

const ScEmpty = () => {
  return (
    <div className="sc-container empty">
      <div className="card-header">
        <h4>👀Empty Cards</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <AddCard />
    </div>
  );
};

export default ScEmpty;
