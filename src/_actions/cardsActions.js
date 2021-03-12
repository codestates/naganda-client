import { CONSTANTS } from '../_actions';

export const addCard = (listID, text, detailTitle, time, place) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID, detailTitle, time, place },
  };
};

// type: 'am',
// detailTitle: 'Go and eat Taco🌮🌮',
// time: '10:00',
// place: 'Yeongdongdaero, 622, Samsung - 1 dong',
// comment: `I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
// lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
// Junghwan are all nice people!`,
