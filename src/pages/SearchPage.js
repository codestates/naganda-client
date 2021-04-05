import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchPageHeader from '../components/Headers/SearchPageHeader';
import Footer from '../components/Footer';
import SearchItems from '../components/SearchItems';
import SeachPageSearchbar from '../components/SeachPageSearchbar';

const axios = require('axios');

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
      show: false,
      data: [],
      items: 20,
      preItems: 0,
    };
  }

  componentDidMount() {
    if (this.state.status) {
      this.getData();
      window.addEventListener('scroll', this.infiniteScroll);
    }
  }

  componentWillUnmount() {
    this.setState({ status: false });
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  getData() {
    axios({
      method: 'post',
      url: 'https://s.naganda.tk/main/search',
      data: { hashtag: this.props.location.pathname.split('/')[2] },
    }).then((res) => {
      this.setState({ data: res.data });
    });
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );

    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = Math.max(document.documentElement.clientHeight);

    if (clientHeight + scrollTop >= scrollHeight - 500) {
      this.setState({
        preItem: this.state.items,
        items: this.state.items + 20,
        status: true,
      });
      this.getData();
    }
  };

  render() {
    let ret = this.state.data.slice(this.state.preItems, this.state.items);

    return this.props.location.pathname.split('/')[2] ? (
      <main>
        <SearchPageHeader />
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
    );
  }
}

export default withRouter(SearchPage);
