import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import createSagaMiddleware from '@redux-saga/core';
import { reducer } from './store/movies/reducer';
import { watcher } from './store/movies/saga';
import './index.scss';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMidleWare = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMidleWare), devTools));
sagaMidleWare.run(watcher);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
