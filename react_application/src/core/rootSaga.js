import { all } from 'redux-saga/effects';
import { fetchProductByIdWatcher, fetchProductsWatcher } from '../redux-saga/watchers';


export function* rootSaga() { 
    yield all([fetchProductsWatcher(), fetchProductByIdWatcher()])
}