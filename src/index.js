import React from 'react';
import ReactDOM from 'react-dom';

// Local Imports
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { rootReducer } from './reducers/rootReducer';

// Redux Imports 
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";


const store = configureStore({
    reducer: rootReducer
})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
