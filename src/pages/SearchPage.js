import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchPageHeader from '../components/Headers/SearchPageHeader';
import Footer from '../components/Footer';

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
      url: 'http://localhost:4000/main/search',
      data: { hashtag: this.props.location.pathname.split('/')[2] },
    }).then((res) => {
      // console.log('응답!', res.data);
      this.setState({ data: res.data });
      // res.data.map((item) => {
      //   this.setState({
      //     keyword: item.hashtag,
      //     // thumbnail: item.thumbnail,
      //     status: false,
      //     data: [res.data],
      //   });
      // });
    });
  }

  render() {
    return (
      <main>
        <SearchPageHeader />
        <section className="contentCard">
          <ul className="contentList">
            {this.state.data.map((item, i) => {
              return (
                <li key={i}>
                  <figure>
                    <button type="button" onClick={this.showModal}>
                      {console.log(item.thumbnail[0].img.slice(0, 5))}
                      {item.thumbnail[0].img.slice(0, 5) === 'https' ? (
                        <img src={item.thumbnail[0].img} />
                      ) : (
                        <img src={`https://${item.thumbnail[0].img}`} />
                      )}
                      <div className="contentList-info">
                        <i className="fab fa-slack-hash"></i>
                        <figcaption>{item.hashtag}</figcaption>
                        <i className="fas fa-heart"></i>
                        {i}
                        <i className="fas fa-eye"></i>
                        {i + 1000}
                      </div>
                    </button>
                  </figure>
                </li>
              );
            })}
          </ul>
        </section>
        <Footer />
      </main>
    );
  }
}

export default withRouter(SearchPage);
