import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import articles from '../features/articles/reducer';
import user from '../features/user/reducer';

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  articles,
  user
});

export default rootReducer;
