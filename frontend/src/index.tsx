import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './features/app';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './configureStore'

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        document.getElementById('root')
    )
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
