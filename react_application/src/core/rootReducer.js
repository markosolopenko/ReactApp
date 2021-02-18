import { combineReducers } from '@reduxjs/toolkit';

// reducers
import { productsSlice } from '../features/productsSlice'; 
import { inputSlice } from '../features/inputSlice';
import { formSlice } from '../features/formSlice';


export const rootReducer = combineReducers({
    productsSlice: productsSlice.reducer,
    inputSlice: inputSlice.reducer,
    formSlice: formSlice.reducer,
})