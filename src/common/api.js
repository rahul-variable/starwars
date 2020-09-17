import axios from 'axios';
import { LOGIN_DETAILS } from './constants';
export const HTTP_POST = 'post';
export const HTTP_GET = 'get';
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
export const fetchData = (url, method = HTTP_GET, data = {}) => {
  return axios({
    method: method,
    url: proxyurl + url,
    data: data,
  });
};

export const dummyLoginApi = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (data) => {
        if (data.username === LOGIN_DETAILS.USERNAME && data.password === LOGIN_DETAILS.PASSWORD)
          resolve(data.username);
        else reject();
      },
      2000,
      data
    );
  });
};
