import React from 'react';

const IntroDesc = () => {
  return (
    <>
      <section className="intro-description">
        <div className="intro-gif"></div>
        <div className="intro-text">
          <h2>빠르고, 영리하고, 심오한 전투</h2>
          <p>
            디아블로® III의 전투는 비명을 질러대고 으르렁대는 적들을 공격하고,
            이들이 죽어가는 모습을 바라보는 전통적인 방식을 따릅니다. 하지만
            더욱 심오하고 흥미로우며, 이제는 단순하다고만 할 수가 없습니다. 각
            직업이 지닌 다양한 방어 기술을 통해 더욱 전략적인 전투가 가능합니다.
          </p>
        </div>
        <div className="gif-hide"></div>
      </section>
      <section className="intro-description second-intro">
        <div className="intro-gif"></div>
        <div className="intro-text">
          <h2>더욱 다양해진 난이도</h2>
          <p>
            디아블로 III의 진보적인 난이도 모드를 통해, 보통 모드에서는 경험할
            수 없는 새로운 방법으로 게임을 진행할 수 있습니다. 난관을 극복하며
            레벨을 올리다 보면 더욱 강하고 위력적인 방어구, 강력한 고유 아이템,
            고레벨 룬, 고유한 제조법, 업그레이드된 장인을 만날 수 있습니다.
          </p>
        </div>
        <div className="gif-hide"></div>
      </section>
    </>
  );
};

export default IntroDesc;
