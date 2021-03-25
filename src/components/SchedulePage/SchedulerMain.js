import React, { useState, useEffect, useRef } from 'react';
import ModifyThumbs from './popupModal/ModifyThumbs';
import Avatar from '../../assets/images/amongus_white.png';

const SchedulerMain = () => {
  const initial = `미슐랭 2스타🌟🌟 정식당에서 운영하는 정식바, 연인과 혹은 친구와
  분위기를 내면 좋은 곳이다! 하지만 혼자 가도 그 분위기를 120% 느낄 수
  있다!🚨🚨 치즈에🧀🧀 레드와인🍷🍷 감튀🍟 면 모든게 끝난다!`;
  const ref = useRef(null);

  const thumbnailRef = useRef(null);
  const [text, setText] = useState(initial);
  const [editable, setEditable] = useState(false);
  const editOn = () => {
    setEditable(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
    }
  };

  const handleClickOutside = (e) => {
    if (editable === true && !ref.current.contains(e.target)) {
      setEditable(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
  });

  return (
    <section className="schedule-banner">
      <div className="schedule-info">
        <div className="schedule-avatar">
          <img src={Avatar} alt="avatar" />
        </div>
        <div ref={ref} className="schedule-title">
          {editable ? (
            <textarea
              type="text"
              value={text}
              onChange={(e) => handleChange(e)}
              onKeyDown={handleKeyDown}
              rows="3"
            />
          ) : (
            <h2 onClick={() => editOn()}>{text}</h2>
          )}
          <div className="thumbs">
            <i className="fas fa-thumbs-up">
              <span>7</span>
            </i>
            <i className="fas fa-thumbs-down">
              <span>2</span>
            </i>
          </div>
        </div>
      </div>
      <ModifyThumbs thumbnailRef={thumbnailRef} />
      <div className="shortcut-icons">
        <div className="add-thumbnail">
          <i
            id="open"
            className="fas fa-images"
            onClick={() => {
              if (thumbnailRef.current !== null) {
                thumbnailRef.current.classList.toggle('show');
              }
            }}
          ></i>
          {/* <i className="fas fa-edit"></i> */}
        </div>
        <div className="bookmark-share">
          <i className="far fa-star"></i>
          <i className="far fa-share-square"></i>
        </div>
      </div>
    </section>
  );
};

export default SchedulerMain;
