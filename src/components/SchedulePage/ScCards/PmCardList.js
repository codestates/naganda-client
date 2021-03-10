import React from 'react';
import ScCard from './ScCard';

const PmCardList = ({ AfternoonList }) => {
  return (
    <>
      {AfternoonList.map((el) => {
        return (
          <ScCard
            key={el.id}
            type={el.type}
            detailTitle={el.detailTitle}
            time={el.time}
            place={el.place}
            comment={el.comment}
          />
        );
      })}
    </>
  );
};

export default PmCardList;
