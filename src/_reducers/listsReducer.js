import { CONSTANTS } from '../_actions';
import { v4 as uuid } from 'uuid';

const listID = 4;
let cardID = 10;

const initialState = [
  {
    title: '🌳Morning',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        type: 'am',
        detailTitle: '카페 OO 주먹밥 GET🍙🍙',
        time: '09:00',
        place: 'Gangnam-gu, seolleung-ro 123',
        text: `아침 수영을 마치고 돌아오는 길에 주먹밥을 2개 사올 예정이다🍙🍙! 여기는 생과일 쥬스도 판매하지만 아침 한정으로 매일마다 맛이 바뀌는 주먹밥을 판매하고 있다!
        조금만 늦으면 직장인들이 우루루 몰려서 몽땅 사가니까 주의🚨🚨🚨해야 한다!`,
      },
      {
        id: `card-${1}`,
        type: 'am',
        detailTitle: 'Cafe Terarosa☕️☕️',
        time: '11:00',
        place: '1F, Teheran-ro, PoscoCenter 440',
        text: `이번에 코드 스테이츠라는 부트 캠프 22주 코스에 참여하기로 했는데, 이미 수료한 친구가 있어서 여기 카페에 와서 함께 이야기를 나눠 보려고 한다.
        카페에 맛있는 샌드위치🥪🥪 도 있어서 먹으면서 나도 개발자가 될 수 있는지 물어봐야 겠다!`,
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
        detailTitle: 'Cafe Terarosa☕️☕️',
        time: '14:00',
        place: '1F, Teheran-ro, PoscoCenter 440',
        text: `친구를 배웅해 주고 다시 카페에 왔다, HTML 과 CSS 책을 펼쳤지만 이내 덮어버렸다. 분명 처음에 이 책을 펼쳤을 때는 이 정도면 나도 뭔가 멋진 개발자가 될 수 있을 거 같은데?
        퇴사각?!🤣🤣 하지만 플렉스인지 뭔지 보고서 내가 지금 뭘 하고 있는가 싶다.`,
      },
      {
        id: `card-${3}`,
        type: 'pm',
        detailTitle: 'OOO 작가 팬사인회🍿',
        time: '16:00',
        place: 'Gangnam-gu, seolleung-ro 123',
        text: `오늘 오후 4시에 좋아하던 OOO 작가의 팬 사인회가 OOO 에서 열린다는 것을 알게 되었다! 가서 사인을 받는 것도 목적이지만 어떻게 글을 멋드러지게 쓰는지 그 노하우를 풀어준대서
        잔뜩 기대하는 중이다!😊😊`,
      },
      {
        id: `card-${4}`,
        type: 'pm',
        detailTitle: '친구와 서울근교 여행계획🎒',
        time: '17:00',
        place: 'Gangnam-gu, seolleung-ro 123',
        text: `오후 다섯시로 약속을 잡아 놓긴 했지만 사실 친구가 다른 일을 처리하고 오느라⏳⏳ 늦을 거 같아서 오후 여섯시 이후로 일정을 잡아야 할지 확실하지가 않다.
        일단 오른쪽에 있는 Empty 칸으로 옮겨 놓으면 좋을 것 같다!🌟`,
      },
      {
        id: `card-${5}`,
        type: 'pm',
        detailTitle: '부모님 생신 케이크 예약🎂🎂',
        time: '18:00',
        place: 'Gangnam-gu, seolleung-ro 123',
        text: `부모님 생신이 곧 3일 앞으로 다가 왔는데, 이곳에서 만드는 케이크는 정말 남녀노소 누구나 다 좋아하는 맛이다! 하지만 미리 방문 예약을 하지 않으면 당일에 구매를 할 수가 없다.
        과일이 많은 케이크를 좋아하시니 그렇게 해야겠다😊😊`,
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
        detailTitle: '정식바 와인 앤 감튀🍷🍟',
        time: '20:00',
        place: 'Gangnam-gu, seolleung-ro 158',
        text: `미슐랭 2스타🌟🌟 정식당에서 운영하는 정식바, 연인과 혹은 친구와 분위기를 내면 좋은 곳이다! 하지만 혼자 가도 그 분위기를 120% 느낄 수 있다!🚨🚨
        치즈에🧀🧀 레드와인🍷🍷 감튀🍟 면 모든게 끝난다!`,
      },
      {
        id: `card-${7}`,
        type: 'mid',
        detailTitle: '소주와 곱창🥴🥴',
        time: '22:00',
        place: 'Gangnam-gu, seolleung-ro 123',
        text: `와인은 사실 식전주였을 뿐 OO 황소곱창에 가서 같이 학습을 진행하는 OO님을 만나 소주 N 병 똭!! 집에가서 기절 똭!!🥴`,
      },
      {
        id: `card-${8}`,
        type: 'mid',
        detailTitle: '정해지지 않은 일과',
        time: '23:40',
        place: 'Gangnam-gu, seolleung-ro 123',
        text: `일단 써놓았다가 아니면 삭제하자!`,
      },
    ],
  },
  {
    title: '👀Empty',
    id: `list-${3}`,
    cards: [
      {
        id: `card-${9}`,
        type: 'mid',
        detailTitle: '파인다이닝 코스 만들기 체험👨🏻‍🎨',
        time: '미정',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        text: `3코스 요리를 만드는 체험과 지인에게 내 음식을 대접해주는 순간까지! 하지만 몇시인지 아직 확정이 안났다!`,
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
        detailTitle: action.payload.detailTitle,
        time: action.payload.time,
        place: action.payload.place,
        id: `card-${cardID}`,
      };
      cardID += 1; //! check : !//

      const newState = state.map((list) => {
        let newList = list.cards.filter(
          (card) => card.detailTitle === newCard.detailTitle,
        );
        // console.log('새로운리스트', newList);
        if (list.id === action.payload.listID) {
          if (newList.length > 0) {
            newList[0].text = newCard.text;
            // console.log(newList);
            let idx = list.cards.indexOf(newList[0]);
            // console.log(idx);
            // list.cards.splice(idx, 1);
            list.cards.splice(idx, 1, newCard);
            // console.log('aaaa', list.cards);
            return {
              ...list,
              cards: [...list.cards],
            };
          }
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      // console.log('새로운 state!', newState);

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

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
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
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //? other list
      if (droppableIdStart !== droppableIdEnd) {
        console.log('other list!');
        //? find the list where drag happened
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
