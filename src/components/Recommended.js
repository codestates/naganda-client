import React from 'react';

const Recommended = () => {
  return (
    <section className="recommend">
      <div className="recommend-box">
        <h2>
          당신이 원하는 스케줄, <br />
          <span>바로 이 곳에👇🏻</span>
        </h2>
        <div className="top4box">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
        <div className="hashtags hide2">
          <div className="tag">#한옥마을🇰🇷</div>
          <div className="tag">#경복궁🏰</div>
          <div className="tag">#미슐랭3✨</div>
          <div className="tag">#하동관🍚</div>
          <div className="tag">#순대국밥🍲</div>
        </div>
      </div>
      <div className="selected-box">
        <div className="items-hashtags">
          <div className="selected-item">
            <h2 className="click-hashtag">
              <span className="desc-hashtag">
                Let&apos;s Click HashTag on the Right side!🏷
              </span>
            </h2>
          </div>
          <div className="hashtags">
            <div className="tag">#한옥마을🇰🇷</div>
            <div className="tag">#경복궁🏰</div>
            <div className="tag">#미슐랭3✨</div>
            <div className="tag">#하동관🍚</div>
            <div className="tag">#순대국밥🍲</div>
          </div>
        </div>
      </div>
      <div className="hashtags hide">
        <div className="tag">#한옥마을🇰🇷</div>
        <div className="tag">#경복궁🏰</div>
        <div className="tag">#미슐랭3✨</div>
        <div className="tag">#하동관🍚</div>
        <div className="tag">#순대국밥🍲</div>
      </div>
    </section>
  );
};

export default Recommended;
