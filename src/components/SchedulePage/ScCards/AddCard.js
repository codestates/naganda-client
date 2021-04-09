import React, { useState, useEffect } from 'react';
import Textarea from 'react-textarea-autosize';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { deleteCard, addCard } from '../../../_actions';

const AddCard = (props) => {
  const [IsFormOpen, setIsFormOpen] = useState(false);
  const [Title, setTitle] = useState('');
  const [Time, setTime] = useState('');
  const [Place, setPlace] = useState('');
  const [Text, setText] = useState('');

  // const { lists } = props.props;
  // console.log(lists);

  // console.log('프롭스', props);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = (e) => {
    setIsFormOpen(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAddCard = () => {
    // const { dispatch, listID } = props.props;
    // const { text } = this.state;

    if (Text || Title || Time || Place) {
      props.props.dispatch(addCard(props.listID, Text, Title, Time, Place));
    }
  };

  return (
    <>
      {IsFormOpen ? (
        <>
          <div className="sc-card">
            <div className="card-infos">
              <form className="card-info">
                <h4>
                  <input
                    type="text"
                    placeholder="제목을 입력하세요"
                    style={{
                      width: '90%',
                      border: 'none',
                      height: '2em',
                      borderRadius: '5px',
                      padding: '15px',
                    }}
                    onChange={handleTitleChange}
                  />
                </h4>
                <span className="time estimated" style={{ padding: '7px' }}>
                  Estimated time:
                  <input
                    type="text"
                    placeholder="10:00"
                    style={{
                      border: 'none',
                      width: '43%',
                      borderRadius: '5px',
                      padding: '3px',
                      paddingLeft: '10px',
                      marginLeft: '10px',
                      textAlign: 'center',
                    }}
                    onChange={handleTimeChange}
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
              // onBlur={closeForm}
              placeholder="내용을 입력하세요"
              onChange={handleTextChange}
            />

            <div className="address-info">
              <h4>
                <input
                  type="text"
                  placeholder="주소를 입력하세요"
                  style={{
                    width: '170px',
                    border: 'none',
                    height: '1.5em',
                    borderRadius: '5px',
                    padding: '15px',
                  }}
                  onChange={handlePlaceChange}
                />
              </h4>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <button
              type="submit"
              className="btn-addCard"
              onClick={handleAddCard}
            >
              Add
            </button>
          </div>
        </>
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

export default connect()(AddCard);
