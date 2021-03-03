import { REGISTER_USER, SIGNIN_USER, LOGOUT_USER } from './types';
import { request } from '../utils/axios';

const USER_URL = '/users';

export function registerUser(dataToSubmit) {
  const data = request('post', USER_URL + '/signup', dataToSubmit);

  return {
    type: REGISTER_USER,
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

export function logoutUser(dataToSubmit) {
  const data = request('post', USER_URL + '/logout', dataToSubmit);
}
