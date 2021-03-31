import React, { useState } from 'react';

import ScColumn from './ScColumn';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../../_actions';

const SchedulerBoard = (props) => {
  const onDragEnd = (result) => {
    // ! TODO reordering logic
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type,
      ),
    );
  };

  console.log('스케줄러에서 내린 프롭스라는데?!', props);

  const { lists } = props;
  // console.log(lists);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="schedules-container">
        {lists.map((list, index) => (
          <ScColumn
            key={list.id}
            listID={list.id}
            title={list.title}
            cards={list.cards}
            index={index}
            props={props}
          />
        ))}
      </section>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(SchedulerBoard);
