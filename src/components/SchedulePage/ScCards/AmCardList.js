import React, { useState } from 'react';
import ScCard from './ScCard';

const AmCardList = ({ MorningList }) => {
  console.log('이게 바로 모닝리스트', MorningList);
  return (
    <>
      {MorningList.map((el) => {
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

export default AmCardList;
