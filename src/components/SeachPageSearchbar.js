import react from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';

const SeachPageSearchbar = () => {
  const [Keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setKeyword(e.target.value);
  };

  const handleInput = () => {
    // e.preventDefault(); //! 활성화시, 페이지로 안 넘어간다
    console.log('검색어: ' + Keyword);
    history.push(`/search/${Keyword}`);
  };

  return (
    <section className="searchPageHeaderBanner">
      <div className="searchPageHeaderBanner-container">
        <form>
          <div className="searchPageHeaderBanner-inputbox">
            {/* <i className="fas fa-running"></i> */}
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search..."
              name=""
              onChange={handleInputChange}
            />
          </div>
          <Link to="#" onClick={handleInput}>
            <button
              className="searchPageHeaderBanner-btn"
              type="submit"
              placeholder="Search..."
            >
              Search
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SeachPageSearchbar;
