import { v4 as uuid } from 'uuid';

const scheduleListData = [
  {
    id: `list-${0}`,
    title: '🌳Morning',
    cards: [
      {
        id: uuid(),
        type: 'am',
        detailTitle: 'Go and eat Taco🌮🌮',
        time: '10:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `I’m going to Mexican Restaurant at ten o’clock this morning🌻. Not
      lonely at all because I’m going with friends 🚗🚗Danbi, Suhyun and
      Junghwan are all nice people!`,
      },
      {
        id: uuid(),
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
    id: `list-${1}`,
    title: '🍄Afternoon',
    cards: [
      {
        id: uuid(),
        type: 'pm',
        detailTitle: 'Eat Sashimi Rolls🍣🍣',
        time: '14:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `The first difference is that sashimi is thinly sliced raw meat, typically fish that is served without rice.
    Typically, sashimi is some type of salmon or tuna. Other popular types of sashimi are mackerel, yellowtail, shrimp, scallops, clams and octopus.
    Translated, sashimi means “pierced fish."`,
      },
      {
        id: uuid(),
        type: 'pm',
        detailTitle: 'Eat Sashimi Rolls🍣🍣',
        time: '14:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `The first difference is that sashimi is thinly sliced raw meat, typically fish that is served without rice.
    Typically, sashimi is some type of salmon or tuna. Other popular types of sashimi are mackerel, yellowtail, shrimp, scallops, clams and octopus.
    Translated, sashimi means “pierced fish."`,
      },
      {
        id: uuid(),
        type: 'pm',
        detailTitle: 'Get Some Drinks🍺🍺',
        time: '17:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `These are terms that can applied to any style of beer, not just IPAs. For instance, you can have a session West Coast IPA and a session Belgian IPA.`,
      },
    ],
  },
  {
    id: `list-${2}`,
    title: '🌝Midnight',
    cards: [
      {
        id: uuid(),
        type: 'mid',
        detailTitle: 'Wine and Pizza🍷🍕',
        time: '23:00',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: uuid(),
        type: 'mid',
        detailTitle: 'Chicken Party🐔🍗',
        time: '23:30',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: uuid(),
        type: 'mid',
        detailTitle: 'Soju & Vodka🍹🍹',
        time: '23:40',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: uuid(),
        type: 'mid',
        detailTitle: '밤에 뭐먹으면 살찐다😋😋',
        time: '23:45',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
      {
        id: uuid(),
        type: 'mid',
        detailTitle: '좋은 개발자가 되고 싶다👨🏻‍💻👨🏻‍💻',
        time: '23:55',
        place: 'Yeongdongdaero, 622, Samsung - 1 dong',
        comment: `A great Neapolitan pizza has the best sauce, the finest mozzarella, and maybe a few whole basil leaves. But before you can get into the toppings, you'll need to make the perfect crust.`,
      },
    ],
  },
  {
    id: `list-${3}`,
    title: '👀Empty',
    cards: [],
  },
];

export default scheduleListData;
