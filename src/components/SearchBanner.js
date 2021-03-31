import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

// const baseUrl = 'http:localhost:4000';

const SearchBanner = () => {
  const [Keyword, setKeyword] = useState('');
  const [Result, setResult] = useState([]);
  const history = useHistory();

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const handleInput = () => {
    // e.preventDefault(); //! 활성화시, 페이지로 안 넘어간다
    console.log('검색어: ' + Keyword);
    history.push(`/search/${Keyword}`);
  };

  return (
    <section className="banner">
      <div className="search-box">
        <h1>담고 싶은 일정을 검색하세요</h1>
        <form>
          <div className="inputbox">
            <i className="fas fa-running"></i>
            <input
              type="text"
              placeholder="#서울🇰🇷 #여행🎒 #데일리📆"
              name=""
              onChange={handleInputChange}
            />
          </div>
          <Link to="#" className="search-btn" onClick={handleInput}>
            <button className="btn-search" type="submit">
              Search
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default withRouter(SearchBanner);
