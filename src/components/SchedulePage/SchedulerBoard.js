import React from 'react';

import ScColumn from './ScColumn';
import { DragDropContext } from 'react-beautiful-dnd';

const SchedulerBoard = ({ ScheduleList }) => {
  const onDragEnd = () => {
    // ! TODO reordering logic
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="schedules-container">
        {ScheduleList.map((list) => (
          <ScColumn
            key={list.id}
            listID={list.id}
            title={list.title}
            cards={list.cards}
          />
        ))}
      </section>
    </DragDropContext>
  );
};

export default SchedulerBoard;
