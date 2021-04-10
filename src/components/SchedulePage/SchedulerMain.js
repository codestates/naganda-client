import React, { useState, useEffect, useRef } from 'react';
import ModifyThumbs from './popupModal/ModifyThumbs';
import Background from '../../assets/images/profile-bg2.jpg';

const SchedulerMain = ({
  Avatar,
  Thumbnail,
  setContent,
  UploadedImg,
  onSubmit,
}) => {
  const initial = `미슐랭 2스타🌟🌟 정식당에서 운영하는 정식바, 연인과 혹은 친구와 분위기를 내면 좋은 곳이다! 하지만 혼자 가도 그 분위기를 120% 느낄 수 있다!🚨🚨 치즈에🧀🧀 레드와인🍷🍷 감튀🍟 면 모든게 끝난다!`;
  const ref = useRef(null);

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const increaseLikeCount = () => {
    setLikeCount(likeCount + 1);
  };
  const increaseDislikeCount = () => {
    setDislikeCount(dislikeCount + 1);
  };

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

  const handleRemoveTitle = () => {
    setText('');
  };

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

  // let myThumbnail = localStorage.setItem('SC_Thumb', Thumbnail);

  return (
    <section
      className="schedule-banner"
      style={
        Thumbnail
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Thumbnail})`,
            }
          : {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Background})`,
            }
      }
    >
      <div className="schedule-info">
        <div className="schedule-avatar">
          <img src={Avatar ? Avatar : '/images/user.png'} alt="avatar" />
        </div>
        <div ref={ref} className="schedule-title">
          {editable ? (
            <textarea
              type="text"
              value={text}
              onChange={(e) => handleChange(e)}
              onKeyDown={handleKeyDown}
              rows="3"
              placeholder="스케줄에 맞는 제목을 입력해 보세요!"
            />
          ) : (
            <h2 onClick={() => editOn()}>{text}</h2>
          )}
          <div className="thumbs">
            <i className="fas fa-thumbs-up" onClick={increaseLikeCount}>
              좋아요<span>{likeCount}</span>
            </i>
            <i className="fas fa-thumbs-down" onClick={increaseDislikeCount}>
              별로에요<span>{dislikeCount}</span>
            </i>
            <i className="fas fa-eraser" onClick={handleRemoveTitle}>
              지우개
            </i>
          </div>
        </div>
      </div>
      <ModifyThumbs
        thumbnailRef={thumbnailRef}
        Thumbnail={Thumbnail}
        setContent={setContent}
        onSubmit={onSubmit}
        UploadedImg={UploadedImg}
      />
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
        </div>
        <div className="bookmark-share">
          <button>모든 변경사항 저장</button>
        </div>
      </div>
    </section>
  );
};

export default SchedulerMain;
