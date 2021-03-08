import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SchedulerMain from '../components/SchedulerMain';
import SchedulerHashtags from '../components/SchedulerHashtags';
import SchedulerBoard from '../components/SchedulerBoard';

const Scheduler = () => {
  return (
    <div className="wrapper">
      <Header />
      <section className="sch-wrapper">
        <SchedulerMain />
        <article className="sch">
          <SchedulerHashtags />
          <SchedulerBoard />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Scheduler;
