import {
  EMAIL_ENTERED,
  PASSWORD_ENTERED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILED
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  token: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_ENTERED:
      return { ...state, email: action.payload };
    case PASSWORD_ENTERED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false};
    case FACEBOOK_LOGIN_SUCCESS:
      return { ...state, token: action.payload}
    case FACEBOOK_LOGIN_FAILED:
      return { ...state, token: null}
    default:
      return state;
  }
}
