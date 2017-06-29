import {
  CHAT_TEXT_CHANGED,
  MESSAGE_FETCH_SUCCESS
} from './../actions/types';

const INITIAL_STATE = {
  message: '',
  messages: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHAT_TEXT_CHANGED:
      return { ...state, message: action.payload };
    case MESSAGE_FETCH_SUCCESS:
      return { ...state, messages: action.payload };
    default:
      return state;
  };
};
