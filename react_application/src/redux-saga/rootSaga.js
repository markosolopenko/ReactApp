import { all } from 'redux-saga/effects';
import { helloSaga } from './filtersSaga';
import { watchFetchProducts } from './productsSaga';

export function* rootSaga() { 
    yield all([helloSaga(), watchFetchProducts()])
}