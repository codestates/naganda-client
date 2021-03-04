import {
  REGISTER_USER,
  SIGNIN_USER,
  LOGOUT_USER,
  MYINFO_USER,
  REGISTER_GUEST,
} from './types';
import { request } from '../utils/axios';

const axios = require('axios');

const USER_URL = '/users';

export function registerUser(dataToSubmit) {
  const data = request('post', USER_URL + '/signup', dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function registerGuest() {
  const data = request('post', USER_URL + '/guest');

  return {
    type: REGISTER_GUEST,
    payload: data,
  };
}

export function signinUser(dataToSubmit) {
  const data = request('post', USER_URL + '/login', dataToSubmit);

  return {
    type: SIGNIN_USER,
    payload: data,
  };
}

export const logoutUser = async () => {
  const token = localStorage.getItem('CC_Token');

  const data = await axios.delete(
    'http://localhost:4000' + USER_URL + '/logout',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return {
    type: LOGOUT_USER,
    payload: data,
  };
};

export const myinfoUser = async () => {
  const token = localStorage.getItem('CC_Token');

  const data = await axios.get('http://localhost:4000' + USER_URL + '/myinfo', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    type: MYINFO_USER,
    payload: data,
  };
};
