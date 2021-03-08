import React from 'react';

const ModifyAvatar = (props) => {
  const onChange = (e) => {
    props.setContent(e.target.files[0]);
  };

  return (
    <form onSubmit={props.onSubmit} className="avatar">
      <img className="avatar-img" src={props.avatar} alt="avatar" />
      <h3>{props.UploadedImg.fileName}</h3>
      <label htmlFor="upload">Upload</label>
      <input
        id="upload"
        className="upload-files"
        type="file"
        onChange={onChange}
      />
      <button className="btn-avatar-modify" type="submit">
        <i className="fas fa-cloud-upload-alt"></i>
      </button>
    </form>
  );
};

export default ModifyAvatar;
