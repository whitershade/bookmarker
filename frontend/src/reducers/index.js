import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import articles from '../features/articles/reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  articles
});

export default rootReducer;
