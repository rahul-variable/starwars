import axios from 'axios';
import { LOGIN_DETAILS } from './constants';
export const HTTP_POST = 'post';
export const fetchData = (url, method = HTTP_POST, data = {}) => {
  return axios({
    method: method,
    url: url,
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
