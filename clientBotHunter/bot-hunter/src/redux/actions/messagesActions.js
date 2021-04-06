import { getAllMessages } from '../../api/messagesApi';
import * as types from '../actionTypes';

export const fetchMessages = (email) => (dispatch) => {
  return getAllMessages(email)
    .then((messages) => {
      dispatch(loadMessagesSuccess(messages));
    })
    .catch((error) => {
      console.error(error);
    });
};

function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES, payload: messages };
}
