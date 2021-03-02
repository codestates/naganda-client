import axios from 'axios';

const DOMAIN = 'http://localhost:4000';

// ! 쿠키 데이터를 전송받기 위함.
axios.defaults.withCredentials = true;

export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return err.response;
    });
};
