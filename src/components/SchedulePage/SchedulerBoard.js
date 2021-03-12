import React from 'react';

import ScColumn from './ScColumn';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import MockData from '../mock/ScheduleListData';

const SchedulerBoard = (props) => {
  const onDragEnd = () => {
    // ! TODO reordering logic
  };
  // const { lists } = props;

  // console.log(props);

  const { lists } = props;

  // ! mockup 데이터파일의 ScheduleList 를 가져다 map 을 돌리는 것이 아닌,
  // ! redux 의 상태 관리, mapStateToProps 를 통해 끌어올려놓은 lists 를 가져다 쓴다!

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <section className="schedules-container">
        {MockData.map((list) => (
          <ScColumn
            key={list.id}
            listID={list.id}
            title={list.title}
            cards={list.cards}
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
