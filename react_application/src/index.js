// React
import React from 'react';
import ReactDOM from 'react-dom';

// Local
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { rootReducer } from './core/rootReducer';

// Redux 
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from "react-redux";


// Redux-Saga 
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './core/rootSaga';



const sagaMiddleware = createSagaMiddleware() 
const store = configureStore({
    reducer: rootReducer,
    middleware: () => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
