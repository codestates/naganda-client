import React, { useState } from 'react';
import MySchedulesItem from './MySchedulesItem';

const MySchedulesList = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      thumbnail: '/images/mockup-thumb1.jpg',
      scheduleTitle: '친구와 함께 한복 코스프레 나들이🥋🥋',
      desc:
        '한옥마을에 가서 한복 코스프레하기! 생각만해도 재밌겠다!!😁😁😁 그다음엔 행사로 열린다는 전통 가양주 체험을 해보겠어! (취하진 않겠지?)',
    },
    {
      id: 2,
      thumbnail: '/images/sundae.jpeg',
      scheduleTitle: '선릉 농민백암순대',
      desc: `코로나 시국에 사람이 많은 곳은 피해야 한다.😳😳 하지만... 이곳은 한번도 맛보지 않은 사람은 있어도 결코 단 한번만 맛본 사람은 없다는 유명한 순대국밥 맛집이다.
      마침 내 친구가 서울에 올라온다고 하니, 같이 먹으러 가기로 했다!😋😋😋 매장이 어찌나 잘되는지 양쪽 건물로 손님을 줄세워 받는다..`,
    },
    {
      id: 3,
      thumbnail: '/images/jungsikbar.jpg',
      scheduleTitle: '서울의 밤거리 투어🍷🥃',
      desc: `미슐랭 2스타🌟🌟 정식당에서 운영하는 정식바, 연인과 혹은 친구와 분위기를 내면 좋은 곳이다! 하지만 혼자 가도 그 분위기를 120% 느낄 수 있다!🚨🚨
      치즈에🧀🧀 레드와인🍷🍷 감튀🍟 면 모든게 끝난다!`,
    },
    {
      id: 4,
      thumbnail: '/images/hadongkwan.jpg',
      scheduleTitle: '하동관 강남분점 (선릉)',
      desc: `오후 네시 반 이후로는 주문을 받지 않는다. 가격은 만원 대 이지만 고기 고명을 추가함으로써 🍲곰탕을 더욱 맛있게 즐길 수 있다! (하지만 돈은 2배로 든다는거!💰)`,
    },
    {
      id: 5,
      thumbnail: '/images/tourkorea.jpeg',
      scheduleTitle: '연남동 예술골목🛣',
      desc: `연희동이 고급 중식당의 집합소로 이름을 떨칠 때, 소소한 중국집과 분식당, 대만 만둣집이 연남동을 지켰다. 그러나 지금 연남동은
      술집이나 밥집 이름을 한 번에 읊지 못할 정도로 맛이 창궐하는 골목이 되었고, 주민이 주체가 된 예술마을로 변모했다.👨🏻‍🎨🎨`,
    },
    {
      id: 6,
      thumbnail: '/images/terarosa.jpeg',
      scheduleTitle: '테라로사 포스코센터점☕️☕️',
      desc: `테헤란로의 포스코센터 1층에 위치하고 있는 정말정말 큰 카페☕️☕️ 창가쪽에 앉아서 좋아하는 사람이나 친구들과 도란도란 이야기를 나누거나
      잘 사용하지 않는 맥북💻 을 들고 가서 공부하는 척 하면 정말 공부가 잘 될까?`,
    },
    {
      id: 7,
      thumbnail: '/images/marioburger.jpeg',
      scheduleTitle: 'Mario 마리오 버거🍔🍔',
      desc: `강남역 인근 패스트파이브가 있는 건물 안으로 들어서면, 엘리베이터가 있는 곳을 지나 한번더 안으로 들어가면 마리오 버거를 파는 가게가 있다!🍔🍔
      으오오오... 먹으면 살찐단 Mario...`,
    },
    {
      id: 8,
      thumbnail: '/images/skewer.jpeg',
      scheduleTitle: '아 양꼬치가 땡긴다🍢🍢🍢',
      desc: `양꼬치엔 칭따오 란 옛말이다....🥴🥴🥴🥴🥴 그럼 뭘까? 맞추면 내가 산다! 아 배고파졌어..`,
    },
    {
      id: 9,
      thumbnail: '/images/hambag.jpeg',
      scheduleTitle: '함박스테이크 짱맛🥩🥩',
      desc: `함박스테이크 꿀맛꿀맛 줄서서 대기하는 곳..`,
    },
  ]);
  return (
    <section className="schedules">
      <h1 className="mypage-title">My Schedules</h1>
      <div className="cards">
        <MySchedulesItem schedules={schedules} />
      </div>
    </section>
  );
};

export default MySchedulesList;
