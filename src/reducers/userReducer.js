import { USER_ACTION_TYPE } from '../common/actionTypes';

const initialState = {
  user: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPE:
      return { ...state, user: action.payload.user };
    default:
      return state;
  }
};
