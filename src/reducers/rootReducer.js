import { combineReducers } from '@reduxjs/toolkit';

// reducers
import { mainPageSlice } from '../features/mainPageSlice'; 
import { detailPageSlice } from '../features/detailPageSlice';


export const rootReducer = combineReducers({
    mainPageSlice: mainPageSlice.reducer,
    detailPageSlice: detailPageSlice.reducer,
})