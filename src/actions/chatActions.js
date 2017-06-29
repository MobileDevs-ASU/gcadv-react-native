import * as firebase from 'firebase';

import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS
} from './types';

export const chatChanged = text => {
  return {
    type: CHAT_TEXT_CHANGED,
    payload: text
  };
};

export const messageSent = ( message, { uid, email } ) => dispatch => {
  const ref = firebase.database().ref("messages").push().set({
    message,
    email,
    uid
  });
}

export const messageFetched = () => dispatch => {
  firebase.database().ref("messages")
    .on('value', snapshot => {
      dispatch({ type: MESSAGE_FETCH_SUCCESS, payload: snapshot.val() });
    });
}
