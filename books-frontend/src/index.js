import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import{ Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers/reducer.js';

// Do we need compose from redux? Vid 4, 10min

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

