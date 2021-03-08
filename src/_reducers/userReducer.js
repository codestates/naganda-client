import {
  REGISTER_USER,
  SIGNIN_USER,
  LOGOUT_USER,
  MYINFO_USER,
  REGISTER_GUEST,
  DELETE_USER,
  UPDATE_USERINFO,
} from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case REGISTER_GUEST:
      return { ...state, registerSuccess: action.payload };
    case SIGNIN_USER:
      return { ...state, signinSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    case MYINFO_USER:
      return { ...state, userInfoSuccess: action.payload };
    case UPDATE_USERINFO:
      return { ...state, updateInfoSuccess: action.payload };
    case DELETE_USER:
      return { ...state, unregisterSuccess: action.payload };

    default:
      return state;
  }
}
