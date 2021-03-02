import { REGISTER_USER, SIGNIN_USER } from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
    case SIGNIN_USER:
      return { ...state, signinSuccess: action.payload };
    default:
      return state;
  }
}
