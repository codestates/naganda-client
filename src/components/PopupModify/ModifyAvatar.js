import React from 'react';
import { useHistory } from 'react-router-dom';

const ModifyAvatar = (props) => {
  const history = useHistory();
  const onChange = (e) => {
    props.setContent(e.target.files[0]);
  };

  return (
    <form onSubmit={props.onSubmit} className="avatar">
      <img
        className="avatar-img"
        src={props.avatar ? props.avatar : '/images/user.png'}
        alt="avatar"
      />
      <h3>{props.UploadedImg.fileName}</h3>
      <label htmlFor="upload">이미지선택</label>
      <input
        id="upload"
        className="upload-files"
        type="file"
        onChange={onChange}
      />
      <button
        className="btn-avatar-modify"
        type="submit"
        onClick={() => history.go(0)}
      >
        <i className="fas fa-sync-alt">
          <span>이미지변경</span>
        </i>
      </button>
    </form>
  );
};

export default ModifyAvatar;
