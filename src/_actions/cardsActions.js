import { CONSTANTS } from '../_actions';

export const addCard = (listID, text, detailTitle, time, place) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, detailTitle, time, place },
  };
};

export const editCard = (id, listID, newText) => {
  return {
    type: CONSTANTS.EDIT_CARD,
    payload: { id, listID, newText },
  };
};
export const deleteCard = (id, listID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { id, listID },
  };
};
