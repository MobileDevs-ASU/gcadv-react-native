import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import DrawerReducer from './DrawerReducer';
import EventReducer from './EventReducer';
import ImageReducer from './ImageReducer';
import StatusBarReducer from './statusBarReducer';
import LoginReducer from './LoginReducer';
import ChatReducer from './ChatReducer';

export default combineReducers({
  selectedAboutId: SelectionReducer,
  drawer: DrawerReducer,
  events: EventReducer,
  image: ImageReducer,
  statusBar: StatusBarReducer,
  login: LoginReducer,
  chat: ChatReducer
});
