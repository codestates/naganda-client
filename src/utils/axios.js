import axios from 'axios';

// const DOMAIN = 'http://localhost:4000';
const DOMAIN = 'http://13.125.241.217:4000';

// ! 쿠키 데이터를 전송받기 위함.
axios.defaults.withCredentials = true;

export const request = (method, url, data) => {
  // console.log(data);
  return axios({
    method,
    url: DOMAIN + url,
    data,
  }).then((res) => {
    // console.log('axios response', res);
    return res;
  });
  // .then((res) => res.data);
  // .catch((err) => {
  //   console.log(err);
  //   return err.response;
  // });
};
