import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddlware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchHero, setAbilities } from './reducers'

const logger = createLogger();
const rootReducer = combineReducers({searchHero, setAbilities})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddlware, logger)));

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
