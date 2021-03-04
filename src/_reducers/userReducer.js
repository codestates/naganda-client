import {
  REGISTER_USER,
  SIGNIN_USER,
  LOGOUT_USER,
  MYINFO_USER,
  MYINFO_USER2,
  LOGOUT_USER2,
} from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case SIGNIN_USER:
      return { ...state, signinSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    case MYINFO_USER:
      return { ...state, userInfoSuccess: action.payload };

    default:
      return state;
  }
}
