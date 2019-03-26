import { combineReducers } from 'redux';
import list from './list/reducer';
import single from './single/reducer';

export default combineReducers({
  list,
  single,
});
