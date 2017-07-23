import {
  SET_PAGE
} from './../actions/types';

const INITIAL_STATE = {
  page: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_PAGE:
      return { ...state, page: state.page + action.payload };
    default:
      return state;
  }
}
