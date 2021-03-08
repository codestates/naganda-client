import React, { useState } from 'react';
import Schedule from './Schedule';

const Schedules = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      thumbnail: '/images/mockup-thumb1.jpg',
      scheduleTitle: 'Traditional place to travel in Seoul',
      desc:
        '한옥마을 및 경복궁 체험 후 인사동 먹거리 체험해 보고 전통 가양주 맛보기',
    },
    {
      id: 2,
      thumbnail: '/images/animal-crossing.gif',
      scheduleTitle: '무인도에서 시작하는 새로운 생활',
      desc: `현실과 동일한 시간이 흐르는 세계에서, 마음 가는 대로 하루하루를
        보내는 「동물의 숲」 시리즈.낚시나 곤충 채집, 가드닝 등 집
        밖에서 즐길 수 있는 요소부터 집 꾸미기・패션까지, 다양한 취미를
        1년 내내 즐기실 수 있습니다. 「모여봐요 동물의 숲」에서는 「Nook
        Inc.」에서 제공하는 「무인도 이주 패키지 플랜」에 참가하여
        무인도로 이주, 하나하나 내 손으로 꾸려 나가는 새로운 생활이
        시작됩니다.`,
    },
    {
      id: 3,
      thumbnail: '/images/mockup-thumb2.jpg',
      scheduleTitle: '밤에 골목 맛집 탐방🍺',
      desc: `이것저것 먹는 것도 좋지만, 가끔은 단일메뉴를 고집하고 싶을 때.
      ‘먹자골목’이 당긴다. 모인 데는 다 그만한 이유가 있다. 한 식당의
      성공에 뒤이어 주변 다른 식당들이 메뉴를 변경한다거나, 흩어져
      있던 노포들이 한곳에 모였다거나. 딱히 개성이 없던 전통시장이
      하나의 먹거리로 새롭게 재조명되며 전에 없던 방문객의 발길을
      끌기도 한다.`,
    },
    {
      id: 4,
      thumbnail: '/images/mockup-thumb3.jpg',
      scheduleTitle: '서울 전통시장 투어',
      desc: `많은 여행객들이 한국의 전통 음식과 문화를 느끼기 위해서 해마다
      서울의 전통시장들을 찾는다. 그러나 계속해서 생겨나는
      대형할인매장이나 인터넷 유통, 홈쇼핑 등으로 한국의 전통시장들은
      점점 사라져가는 추세이다. 하지만 그 가운데에서도 변함없이 오랜
      전통을 보여주며 수 많은 시장과는 다른 특색으로 꾸준히 인기를
      유지하는 시장이 있다.`,
    },
    {
      id: 5,
      thumbnail: '/images/landingPage-tablet.jpg',
      scheduleTitle: 'Traditional place to travel in Seoul',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
      delectus dolorum modi reiciendis, minus vero fugiat libero!`,
    },
    {
      id: 6,
      thumbnail: '/images/mockup-thumb4.jpg',
      scheduleTitle: 'Traditional place to travel in Seoul',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
      cum suscipit asperiores non praesentium ex autem dolorum animi
      dicta, quod et fuga quibusdam ea ratione mollitia reiciendis.
      Deserunt, aspernatur dignissimos.`,
    },
    {
      id: 7,
      thumbnail: '/images/landingPage-img.jpg',
      scheduleTitle: 'Traditional place to travel in Seoul',
      desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
      cum suscipit asperiores non praesentium ex autem dolorum animi
      dicta, quod et fuga quibusdam ea ratione mollitia reiciendis.
      Deserunt, aspernatur dignissimos.`,
    },
  ]);
  return (
    <section className="schedules">
      <h1 className="mypage-title">My Schedules</h1>
      <div className="cards">
        <Schedule schedules={schedules} />
      </div>
    </section>
  );
};

export default Schedules;
