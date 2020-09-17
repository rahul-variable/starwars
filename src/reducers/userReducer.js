import { USER_ACTION_LOGIN, USER_ACTION_SIGNOUT } from '../common/actionTypes';
const initialState = {
  user: sessionStorage.getItem('user'),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_LOGIN:
      sessionStorage.setItem('user', action.payload.user);
      return { ...state, user: action.payload.user };
    case USER_ACTION_SIGNOUT:
      sessionStorage.clear();
      return { ...state, user: '' };
    default:
      return state;
  }
};
