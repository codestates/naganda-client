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
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    if (this.state.status) {
      this.getData();
      this.setState({ status: false });
    }
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  getData() {
    axios({
      method: 'post',
      url: 'https://s.naganda.tk/main/search',
      data: { hashtag: this.props.location.pathname.split('/')[2] },
    }).then((res) => {
      // console.log('응답!', res.data);
      this.setState({ data: res.data });
    });
  }

  render() {
    return this.props.location.pathname.split('/')[2] ? (
      <main>
        <SearchPageHeader />
        <SeachPageSearchbar />
        <div className="search-main-image">
          {/* <img src={'/images/beach_illustration.jpg'}></img> */}
          <img src="https://cdn.dribbble.com/assets/searches/search-header-medium-53708b5f94932b0cba44602a53c34bf97989c1acb51b926d36841ed4626c9d4d.webp"></img>
        </div>
        <section className="search-container">
          <ul className="search-item">
            {/* <button type="button" onClick={this.showModal}></button> */}
            <SearchItems items={this.state.data} />
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
              {/* <li>
                <a>#관광지</a>
              </li> */}
            </ul>
          </div>
        </section>
        <Footer />
      </main>
    ) : (
      <div className="search-container-keyword">
        <div>{`요청받은 키워드가 없습니다. 다시 검색해주세요.`}</div>
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5dff4c68-9075-4691-bf21-c75683c6d87d/no_keyword.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210324T061210Z&X-Amz-Expires=86400&X-Amz-Signature=6753d5ca26c116568812c65e82252fe5eb125a49e99699b9c18f6126a6edf7fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22no_keyword.svg%22"
          alt="You haven't keyword. Check your keyword"
        />
      </div>
    );
  }
}

export default withRouter(SearchPage);
