import React, { useState, useEffect, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { deleteCard, addCard } from '../../../_actions';
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
  const ref = useRef(null);
  const [deleted, setDeleted] = useState(false);

  // state 내리기를 통해 기본 으로 보여지는 목업의 schedule text 를 초기 state 로 지정했다.
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
    // console.log(listID);
    // props.dispatch(deleteCard(id, listID));
    setDeleted(true);
  };

  // ! props.lists 를 반복돌려서 props.lists[i].id 와 listID 가  가 다르다면, listID 에 props.lists[i].id 를 할당한다?!
  // console.log('프롭스', props);
  // console.log('이거슨 리스트 아이디라네', listID);
  // console.log('텍스트 확인해봐', text);
  // console.log('수정된 텍스트가 있는가', editedText);

  // useEffect(() => {
  //   if (props.listID !== listID) {
  //     console.log('있으');
  //     props.dispatch(
  //       addCard(props.listID, editedText, detailTitle, time, place),
  //     );
  //   }
  // }, [editedText]);

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
              <div ref={ref} className="text-content">
                {editable ? (
                  <textarea
                    type="text"
                    value={editedText}
                    onChange={(e) => handleEditedText(e)}
                    onKeyDown={handleKeyDownText}
                    rows="3"
                    placeholder="스케줄의 내용을 입력하세요!"
                  />
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
