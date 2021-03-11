const initialState = [
  {
    title: 'Last Episode',
    id: 0,
    cards: [
      {
        id: 0,
        type: 'am',
        detailTitle: 'Go and eat Taco🌮🌮',
        time: '10:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
      lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
      Junghwan are all nice people!`,
      },
      {
        id: 1,
        type: 'am',
        detailTitle: 'Starbucks Coffee☕️☕️',
        time: '11:00',
        place: '1F, Sehwa Building 889-40 Daechi-Dong',
        comment: `It’s surprising how different brewing methods can enhance particular characteristics in your coffee.
      Let us help you unlock the full potential of your coffee—for the perfect cup every time.`,
      },
    ],
  },
  {
    title: 'This Episode',
    id: 1,
    cards: [
      {
        id: 0,
        type: 'am',
        detailTitle: 'Go and eat Taco🌮🌮',
        time: '10:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
      lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
      Junghwan are all nice people!`,
      },
      {
        id: 1,
        type: 'am',
        detailTitle: 'Starbucks Coffee☕️☕️',
        time: '11:00',
        place: '1F, Sehwa Building 889-40 Daechi-Dong',
        comment: `It’s surprising how different brewing methods can enhance particular characteristics in your coffee.
      Let us help you unlock the full potential of your coffee—for the perfect cup every time.`,
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
