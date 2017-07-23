import {
  EMAIL_ENTERED,
  PASSWORD_ENTERED,
  CONFIRM_PASSWORD_ENTERED
} from './types';

export const createEmailChanged = email => {
  return {
    type: EMAIL_ENTERED,
    payload: email
  }
}

export const createPasswordChanged = password => {
  return {
    type: PASSWORD_ENTERED,
    payload: password
  }
}

export const createConfirmPasswordChanged = password => {
  return {
    type: CONFIRM_PASSWORD_ENTERED,
    payload: password
  }
}
