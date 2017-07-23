import * as firebase from 'firebase';
import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';

import {
  SET_IMG,
  SELECT_ABOUT,
  TOGGLE_DRAWER,
  EVENT_ID,
  IMAGE_LOADING,
  HIDE_BAR,
  EMAIL_ENTERED,
  PASSWORD_ENTERED,
  LOGIN_USER_SUCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILED
} from './types';

export * from './chatActions';
export * from './eventsActions';
export * from './trainingActions';
export * from './aboutActions';
export * from './onBoardingAction';

export const selectAbout = (aboutId) => {
  return {
    type: SELECT_ABOUT,
    payload: aboutId
  }
}

export const setImg = (imgId) => {
  return {
    type: SET_IMG,
    payload: imdId
  }
}

export const toggleDrawer = (isOpen) => {
  return {
    type: TOGGLE_DRAWER,
    payload: isOpen
  }
}

export const imageLoading = (loading) => {
  return {
    type: IMAGE_LOADING,
    payload: loading
  }
}

export const eventName = (id) => {
  return {
    type: EVENT_ID,
    payload: id
  }
}

export const hideStatusBar = (hidden) => {
  return {
    type: HIDE_BAR,
    payload: hidden
  }
}

export const emailChanedText = (text) => {
  return {
    type: EMAIL_ENTERED,
    payload: text
  }
}

export const passwordChangedText = (text) => {
  return {
    type: PASSWORD_ENTERED,
    payload: text
  };
};

export const loginUser = ({email, password}) =>  async dispatch => {
  let userToken = await AsyncStorage.getItem('user');
  if(userToken) {
    loginUserSucess(dispatch, userToken);
  }else{
    dispatch({type: LOGIN_USER});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSucess(dispatch, user);
      })
      .catch(() => loginUserFailed(dispatch));
  };
};

export const createUser = ({ email, password, confirmPassword }) => async dispatch => {
  if (password === confirmPassword) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSucess(dispatch, user)
      }).catch(() => loginUserFailed(dispatch));
  }else{
    loginUserFailed(dispatch);
  }

}

const loginUserSucess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCESS,
    payload: user
  });
  Actions.main({ type: 'replace' });
};

const loginUserFailed = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILED });
};

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if(token) {
    Actions.main();
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
  } else {
    doFaceBookLogin(dispatch);
  }
};

const doFaceBookLogin = async dispatch => {
  let { token, type } = await Facebook.logInWithReadPermissionsAsync('430338160680705', {
    permission: ['public_profile']
  });

  if(type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAILED })
  }

  await AsyncStorage.setItem('fb_token', token);
  const provider = firebase.auth.FacebookAuthProvider
  const credential = provider.credential(token)
  firebase.auth().signInWithCredential(credential)
  Actions.main();
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

// export const attemptLogin = (dispatch) => {
//   var token = AsyncStorage.getItem('user');
//   if(token) {
//     Actions.main();
//     dispatch({ type: LOGIN_USER_SUCESS, payload: user })
//   }
// }
