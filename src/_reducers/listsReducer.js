import { CONSTANTS } from '../_actions';

const listID = 2;
const cardID = 6;

const initialState = [
  {
    title: 'Last Episode',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: 'we created a static list and a static card',
      },
      {
        id: `card-${1}`,
        text: 'we used a mix between material UI React and styled component',
      },
    ],
  },
  {
    title: 'This Episode',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: 'we will create out first reducer',
      },
      {
        id: `card-${3}`,
        text:
          'we will also make some little change i forgot in the last episode',
      },
      {
        id: `card-${4}`,
        text:
          'we will also make some little change i forgot in the last episode',
      },
      {
        id: `card-${5}`,
        text:
          'we will also make some little change i forgot in the last episode',
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        // title: action.payload, //! check : action.payload
        title: action.payload.title, //! check : action.payload
        cards: [],
        id: `list-${listID}`,
      };
      // listID += 1; //! check : !//
      return [...state, newList];
    }

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      // cardID += 1; //! check : !//

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPEND: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;

      const newState = [...state];

      //? dragging lists around
      if (type === 'list') {
        const list = newState.splice(droppableIdStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      //? in the same list
      if (droppableIdStart === droppableIdStart) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //? other list
      if (droppableIdStart !== droppableIdEnd) {
        //? find the list where drag happend
        const listStart = state.find((list) => droppableIdStart === list.id);

        //? pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);

        //? find the list where drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        //? put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }
    default:
      return state;
  }
};

export default listsReducer;
