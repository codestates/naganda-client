import React from 'react';
import ScCard from './ScCard';
const MidCardList = ({ MidnightList }) => {
  return (
    <>
      {MidnightList.map((el) => {
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

export default MidCardList;
