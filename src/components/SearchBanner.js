import React from 'react';

const SearchBanner = () => {
  return (
    <section className="banner">
      <div className="search-box">
        <h1>담고 싶은 일정을 검색하세요</h1>
        <div className="inputbox">
          <i className="fas fa-running"></i>
          <input
            type="text"
            placeholder="#서울 #가로수길 #소주"
            name=""
            defaultValue="#소고기파티"
          />
        </div>
        <button className="btn-search" type="button">
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBanner;
