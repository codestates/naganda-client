import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import SearchPageHeader from '../components/Headers/SearchPageHeader';
import Footer from '../components/Footer';
import SearchItems from '../components/SearchItems';
import SeachPageSearchbar from '../components/SeachPageSearchbar';
import { myinfoUser } from '../_actions/userAction';
import { useDispatch } from 'react-redux';
const axios = require('axios');
const url = 'https://s.naganda.tk/main/search';
const SearchPage = (props) => {
  let [items, setItems] = useState(0); // no-const-assign: eslint error, const -> let 변경
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const unmounted = useRef(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    if (status) {
      axios({
        method: 'post',
        url: url,
        data: { hashtag: props.location.pathname.split('/')[2] },
        cancelToken: source.token,
      })
        .then((res) => {
          if (!unmounted.current) {
            items += 20;
            setItems(items);
            setData(res.data);
            setStatus(false);
          }
        })
        .catch((err) => console.log(err)); // 추가
    }
    return () => {
      unmounted.current = true;
    };
  }, [status]);
  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = Math.max(document.documentElement.clientHeight);
    if (clientHeight + scrollTop >= scrollHeight - 750) {
      unmounted.current = false;
      setStatus(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true); // true를 빼니 프리징이 사라졌다?
    setStatus(true);
    return () => {
      //  clean up
      window.removeEventListener('scroll', infiniteScroll, true);
      setStatus(false);
    };
  }, []);
  useEffect(() => {
    dispatch(myinfoUser())
      .then((res) => {
        let userinfo = res.payload.data;
        setEmail(userinfo.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);
  let ret = data.slice(0, items);
  return (
    <>
      {props.location.pathname.split('/')[2] ? (
        <main>
          <SearchPageHeader email={email} />
          <SeachPageSearchbar />
          <div className="search-main-image">
            <img src="/images/search_bg_3.png"></img>
          </div>
          <section className="search-container">
            <ul className="search-item">
              <SearchItems items={ret} />
            </ul>
            <div className="search-container-suggest">
              <ul className="search-container-suggest-ul">
                <span>추천 검색어:</span>
                <li>
                  <a>#서울</a>
                </li>
                <li>
                  <a>#여행</a>
                </li>
                <li>
                  <a>#명동</a>
                </li>
                <li>
                  <a>#맛집</a>
                </li>
                <li>
                  <a>#데이트</a>
                </li>
              </ul>
            </div>
          </section>
          <Footer />
        </main>
      ) : (
        <div className="search-container-keyword">
          <div>{`요청받은 키워드가 없습니다. 다시 검색해주세요.`}</div>
          <img
            src="/images/no_keyword.svg"
            alt="You haven't keyword. Check your keyword"
          />
        </div>
      )}
    </>
  );
};
export default withRouter(SearchPage);
