import React from 'react';

import ScMorning from './ScMorning';
import ScAfternoon from './ScAfternoon';
import ScNight from './ScNight';
import ScEmpty from './ScEmpty';

const SchedulerBoard = ({
  MorningList,
  AfternoonList,
  MidnightList,
  EmptyList,
}) => {
  return (
    <section className="schedules-container">
      <ScMorning MorningList={MorningList} />
      <ScAfternoon AfternoonList={AfternoonList} />
      <ScNight MidnightList={MidnightList} />
      <ScEmpty EmptyList={EmptyList} />
    </section>
  );
};

export default SchedulerBoard;
