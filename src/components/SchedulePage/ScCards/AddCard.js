import React, { useState } from 'react';
import Textarea from 'react-textarea-autosize';

const AddCard = (props) => {
  const [IsFormOpen, setIsFormOpen] = useState(false);
  const [Text, setText] = useState('');

  // const { lists } = props.props;
  // console.log(lists);

  const renderForm = () => {
    const { lists } = props.props;
    const placeholder = lists
      ? 'Enter list title...'
      : 'Enter a title for this card...';

    const buttonTitle = lists ? 'Add List' : 'Add Card';
    return (
      <div
        style={{
          overflow: 'visible',
          minHeight: 80,
          minWidth: 272,
          padding: '6px 8px 2px',
        }}
      >
        <Textarea
          placeholder={placeholder}
          autoFocus
          onBlur={closeForm}
          value={Text}
          onChange={handleInputChange}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
            border: 'none',
          }}
        />
        <div>
          <button>Add</button>
        </div>
      </div>
    );
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = (e) => {
    setIsFormOpen(false);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      {IsFormOpen ? (
        // renderForm()
        <div className="sc-card">
          <div className="card-infos">
            <form className="card-info">
              <h4>
                <input
                  type="text"
                  placeholder="제목을 입력하세요"
                  style={{
                    width: '100%',
                    border: 'none',
                    height: '2em',
                    borderRadius: '5px',
                    padding: '15px',
                  }}
                />
              </h4>
              <span className="time estimated" style={{ padding: '7px' }}>
                Estimated time:
                <input
                  type="text"
                  placeholder="AM 10:00"
                  style={{
                    border: 'none',
                    width: '48%',
                    borderRadius: '5px',
                    padding: '3px',
                    paddingLeft: '10px',
                    marginLeft: '10px',
                    textAlign: 'center',
                  }}
                />
              </span>
            </form>
            <span
              className="btn-closed"
              onClick={closeForm}
              style={{ position: 'relative', right: '-20px', top: '-20px' }}
            >
              <i className="fas fa-times"></i>
            </span>
          </div>

          <Textarea
            className="textareaInput"
            maxRows="2"
            onBlur={closeForm}
            placeholder="내용을 입력하세요"
          />

          <div className="address-info">
            <h4>
              <input
                type="text"
                placeholder="주소를 입력하세요"
                style={{
                  width: '200px',
                  border: 'none',
                  height: '1.5em',
                  borderRadius: '5px',
                  padding: '15px',
                }}
              />
            </h4>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <button
            type="submit"
            style={{
              border: 'none',
              width: '60px',
              height: '35px',
              position: 'relative',
              top: '-22%',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            Add
          </button>
        </div>
      ) : (
        <div className="add-card">
          <h4>Add a card...</h4>
          <button type="button" onClick={openForm}>
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default AddCard;
