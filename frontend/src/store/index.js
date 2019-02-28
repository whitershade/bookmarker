import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory';
import createRootReducer from '../reducers';


export const history = createHistory();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ),
);


export default store;
