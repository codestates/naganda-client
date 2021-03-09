import React from 'react';

import ScMorning from './ScMorning';
import ScAfternoon from './ScAfternoon';
import ScNight from './ScNight';
import ScEmpty from './ScEmpty';

const SchedulerBoard = () => {
  return (
    <section className="schedules-container">
      <ScMorning />
      <ScAfternoon />
      <ScNight />
      <ScEmpty />
    </section>
  );
};

export default SchedulerBoard;
