import React from 'react';

const IntroDesc = () => {
  return (
    <>
      <section className="intro-description">
        <div className="intro-gif"></div>
        <div className="intro-text">
          <h2>NAGANDA 와 함께하는 하루 일과😁😁</h2>
          <p>
            당신의 하루를 정리해 보세요! nAgAndA 는 계획된 일정을 공유하고
            정리할 수 있는 서비스 입니다. <br />
            <br />
            여행, 데이트 등 많은 검색을 하고 일정을 준비하셨나요? <br />
            파트너와 nAgAndA 를 공유하고 의견을 나눠 보세요!
          </p>
        </div>
        <div className="gif-hide"></div>
      </section>
      <section className="intro-description second-intro">
        <div className="intro-gif"></div>
        <div className="intro-text">
          <h2>연관 검색어를 통한 스케줄 추천🚨🚨</h2>
          <p>
            매일 똑같기만 한 하루 스케줄을 어떻게 짜야 할지 고민이시라구요?😭
            <br />
            NAGANDA 에서는 해시태그 기반 맞춤 검색 기능을 제공해 드리고
            있습니다!🌟🌟 이제는 더 이상 타인에게 내 일정을 맡기지 마세요!
            나간다가 해결해 드립니다!👍👍
          </p>
        </div>
        <div className="gif-hide"></div>
      </section>
    </>
  );
};

export default IntroDesc;
