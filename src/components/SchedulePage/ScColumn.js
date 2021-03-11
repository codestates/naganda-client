import React from 'react';
import ScCard from './ScCards/ScCard';
import AddCard from './ScCards/AddCard';
import { Droppable } from 'react-beautiful-dnd';

const ScColumn = ({ listID, title, cards }) => {
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
            <i className="fas fa-ellipsis-h"></i>
          </div>
          {cards.map((card, index) => (
            <ScCard
              key={card.id}
              id={card.id}
              index={index}
              detailTitle={card.detailTitle}
              type={card.type}
              time={card.time}
              place={card.place}
              comment={card.comment}
            />
          ))}
          <AddCard />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ScColumn;
