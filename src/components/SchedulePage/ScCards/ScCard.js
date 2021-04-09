import React, { useState, useEffect, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { deleteCard, addCard } from '../../../_actions';
import { connect } from 'react-redux';
const ScCard = ({
  id,
  index,
  detailTitle,
  time,
  place,
  text,
  listID,
  props,
}) => {
  const ref = useRef(null);
  const [deleted, setDeleted] = useState(false);

  const [editedText, setEditedText] = useState('');
  const [editable, setEditable] = useState(false);
  const editOn = () => {
    setEditable(true);
  };
  const handleEditedText = (e) => {
    setEditedText(e.target.value);
  };
  const handleKeyDownText = (e) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
    }
  };

  // const { lists } = props;
  // console.log('자 현재의 리스트다!!!', lists);

  // ref.current 가 null 일 때 처리 (칸반보드를 움직일때)
  const handleClickOutside = (e) => {
    if (ref.current !== null) {
      if (editable === true && !ref.current.contains(e.target)) {
        setEditable(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
  });

  const handleDeleteCard = (e) => {
    e.preventDefault();
    props.dispatch(deleteCard(id, listID));
    setDeleted(true);
  };

  const saveCard = (e) => {
    e.preventDefault();

    if (editedText) {
      setDeleted(true);
      props.dispatch(addCard(listID, editedText, detailTitle, time, place));
    }

    setEditable(false);
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
                  <span className="time">Estimated time: {time}</span>
                </div>
                <span className="btn-closed" onClick={handleDeleteCard}>
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
              <div ref={ref} className="text-content">
                {editable ? (
                  <>
                    <textarea
                      type="text"
                      value={editedText}
                      onChange={(e) => handleEditedText(e)}
                      onKeyDown={handleKeyDownText}
                      rows="3"
                      placeholder="스케줄의 내용을 입력하세요!"
                    />
                    <button onClick={saveCard}>add</button>
                  </>
                ) : (
                  <div onClick={() => editOn()}>
                    {!editedText ? text : editedText}
                    {/* {editedText} */}
                  </div>
                )}
              </div>
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
