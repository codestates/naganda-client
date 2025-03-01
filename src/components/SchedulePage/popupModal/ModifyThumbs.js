import React, { useRef } from 'react';
import Logo from '../../../assets/images/logo1.png';

const ModifyThumbs = ({
  thumbnailRef,
  Thumbnail,
  setContent,
  onSubmit,
  UploadedImg,
}) => {
  const onChange = (e) => {
    setContent(e.target.files[0]);
  };
  return (
    <div className="modal-container" id="modal_container" ref={thumbnailRef}>
      <div className="modal">
        <img className="logo2" src={Logo} alt="logo" />
        <h1>썸네일 변경하기</h1>
        <ul>
          <li>
            <span
              style={{
                backgroundColor: '#353866',
                color: '#fff',
                padding: '2px',
              }}
            >
              이미지 선택
            </span>
            을 눌러 적용할 이미지를 선택한 후,
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#005eb6',
                color: '#fff',
                padding: '2px',
              }}
              type="submit"
            >
              이미지 변경
            </span>
            을 눌러 썸네일을 변경해 주세요
          </li>
        </ul>
        <div className="btn-thumbmodal">
          <form onSubmit={onSubmit}>
            <label htmlFor="upload">이미지 선택</label>
            <input
              id="upload"
              className="upload-files"
              type="file"
              onChange={onChange}
            />
            <button type="submit">이미지 변경</button>
          </form>
          <button
            id="close"
            onClick={() => {
              if (thumbnailRef.current !== null) {
                thumbnailRef.current.classList.remove('show');
              }
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyThumbs;
