import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ModifyThumbs from './popupModal/ModifyThumbs';
import Background from '../../assets/images/profile-bg2.jpg';

const SchedulerMain = ({
  Avatar,
  Thumbnail,
  setContent,
  UploadedImg,
  onSubmit,
  handleSaveData,
  getTitle,
  UserParamsId,
  MyTitle,
  setMyTitle,
}) => {
  const initial = `제목을 입력하고 Enter 해주세요.`;
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
      // ! 별표!!!!!!!!!!!!!!!!!!!
      getTitle(text);
    }
  };

  const handleRemoveTitle = () => {
    // ! 데이터로 받은 MyTitle 이 있을 때는 setMyTitle 로 초기화 시켜준다.
    if (MyTitle) {
      setMyTitle('');
    }
    setText('');
  };

  const handleClickOutside = (e) => {
    if (ref.current !== null) {
      if (editable === true && !ref.current.contains(e.target)) {
        setEditable(false);
        setText('');
      }
    }
  };
  useEffect(() => {
    // ! getTitle(text); useEffect 로 타이틀을 가져오게 하면 추후 MyTitle 데이터를 props 로 받아오질 못했다.
    window.addEventListener('click', handleClickOutside, true);
  });

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
              placeholder="스케줄에 맞는 제목을 입력후 ENTER!"
            />
          ) : (
            <h2 onClick={() => editOn()}>{MyTitle ? MyTitle : text}</h2>
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
          <button onClick={handleSaveData}>모든 변경사항 저장</button>
        </div>
      </div>
    </section>
  );
};

export default SchedulerMain;
