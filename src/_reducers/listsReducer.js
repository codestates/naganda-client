import { CONSTANTS } from '../_actions';
import { v4 as uuid } from 'uuid';

const listID = 4;
let cardID = 9;

const initialState = [
  {
    title: '🌳Morning',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        type: 'am',
        detailTitle: 'Go and eat Taco🌮🌮',
        time: '10:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
      lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
      Junghwan are all nice people!`,
      },
      {
        id: `card-${1}`,
        type: 'am',
        detailTitle: 'Starbucks Coffee☕️☕️',
        time: '11:00',
        place: '1F, Sehwa Building 889-40 Daechi-Dong',
        text: `It’s surprising how different brewing methods can enhance particular characteristics in your coffee.
      Let us help you unlock the full potential of your coffee—for the perfect cup every time.`,
      },
    ],
  },
  {
    title: '🍄Afternoon',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        type: 'pm',
        detailTitle: 'Eat Sashimi Rolls🍣🍣',
        time: '14:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `The first difference is that sashimi is thinly sliced raw meat, typically fish that is served without rice.
    Typically, sashimi is some type of salmon or tuna. Other popular types of sashimi are mackerel, yellowtail, shrimp, scallops, clams and octopus.
    Translated, sashimi means “pierced fish."`,
      },
      {
        id: `card-${3}`,
        type: 'pm',
        detailTitle: '밤에 뭐먹으면 살찐다😋😋',
        time: '16:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: `card-${4}`,
        type: 'pm',
        detailTitle: 'Get Some Drinks🍺🍺',
        time: '17:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `These are terms that can applied to any style of beer, not just IPAs. For instance, you can have a session West Coast IPA and a session Belgian IPA.`,
      },
      {
        id: `card-${5}`,
        type: 'pm',
        detailTitle: '좋은 개발자가 되고 싶다👨🏻‍💻👨🏻‍💻',
        time: '17:35',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
    ],
  },
  {
    title: '🌝Midnight',
    id: `list-${2}`,
    cards: [
      {
        id: `card-${6}`,
        type: 'mid',
        detailTitle: 'Wine and Pizza🍷🍕',
        time: '23:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: `card-${7}`,
        type: 'mid',
        detailTitle: 'Chicken Party🐔🍗',
        time: '23:30',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: `card-${8}`,
        type: 'mid',
        detailTitle: 'Soju & Vodka🍹🍹',
        time: '23:40',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
    ],
  },
  {
    title: '👀Empty',
    id: `list-${3}`,
    cards: [],
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
        detailTitle: action.payload.detailTitle,
        time: action.payload.time,
        place: action.payload.place,
        id: `card-${cardID}`,
      };
      cardID += 1; //! check : !//

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

    case CONSTANTS.DELETE_CARD: {
      const { listID, id } = action.payload;
      // console.log('aaaaaaa', action.payload);
      // console.log(action.payload.listID);
      const mylist = state.filter((list) => list.id === listID);
      console.log('마이리스트', mylist);
      // const list = state[listID];
      console.log('리스트리스트', mylist);
      const newCards = mylist[0].cards.filter((cardID) => cardID !== id);

      return { ...state, [listID]: { ...mylist, cards: newCards } };
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
