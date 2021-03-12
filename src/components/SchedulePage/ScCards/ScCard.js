import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { deleteCard } from '../../../_actions';
import { connect } from 'react-redux';
const ScCard = ({
  id,
  index,
  detailTitle,
  type,
  time,
  place,
  text,
  listID,
  props,
}) => {
  const [deleted, setDeleted] = useState(false);

  const handleDeleteCard = (e) => {
    // console.log(listID);
    // props.dispatch(deleteCard(id, listID));
    setDeleted(true);
  };
  return (
    <>
      {deleted ? (
        <></>
      ) : (
        <Draggable draggableId={String(id)} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="sc-card"
            >
              <div className="card-infos">
                <div className="card-info">
                  <h4>{detailTitle}</h4>
                  <span className="time">
                    Estimated time: {type} {time}
                  </span>
                </div>
                <span className="btn-closed" onClick={handleDeleteCard}>
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
              <div className="text-content">{text}</div>
              <div className="address-info">
                <h4>{place}</h4>
                <i className="fas fa-map-marker-alt"></i>
              </div>
            </div>
          )}
        </Draggable>
      )}
    </>
  );
};

export default connect()(ScCard);
