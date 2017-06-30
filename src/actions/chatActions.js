import * as firebase from 'firebase';

import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS,
  LOADING_MESSAGE,
  MESSAGE_SENT,
  MESSAGE_FAILED
} from './types';

export const chatChanged = text => {
  return {
    type: CHAT_TEXT_CHANGED,
    payload: text
  };
};

export const messageSent = ( message, { uid, email } ) => dispatch => {
  dispatch({ type: LOADING_MESSAGE })
  const ref = firebase.database().ref("messages").push().set({
    message,
    email,
    user: uid
  })
  .then(() =>{
    dispatch({ type: MESSAGE_SENT });
  })
  .catch(() =>{
    dispatch({ type: MESSAGE_FAILED });
  });
}

export const messageFetched = () => dispatch => {
  firebase.database().ref("messages")
    .on('value', snapshot => {
      dispatch({ type: MESSAGE_FETCH_SUCCESS, payload: snapshot.val() });
    });
}
