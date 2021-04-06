import initialState from '../initialState';
import * as types from '../actionTypes';

export default function messagesReducer(state = initialState.messages, action) {
  switch (action.type) {
    case types.LOAD_MESSAGES:
      return action.payload;
    case types.ADD_MESSAGE:
      return [...state, action.payload];

    default:
      return state;
  }
}
