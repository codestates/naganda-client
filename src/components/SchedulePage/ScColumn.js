import React, { useState } from 'react';
import ScCard from './ScCards/ScCard';
import AddCard from './ScCards/AddCard';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

const ScColumn = ({ listID, title, cards, props, getDetailCards }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="sc-container morning"
        >
          <div className="card-header">
            <h4>{title}</h4>
          </div>
          {cards.map((card, index) => (
            <ScCard
              key={card.id}
              id={card.id}
              index={index}
              text={card.text}
              detailTitle={card.detailTitle}
              time={card.time}
              place={card.place}
              listID={listID}
              props={props}
              getDetailCards={getDetailCards}
            />
          ))}

          {provided.placeholder}
          {/* AddCard Component 의 전 위치 */}
          <AddCard listID={listID} props={props} />
        </div>
      )}
    </Droppable>
  );
};

export default connect()(ScColumn);
