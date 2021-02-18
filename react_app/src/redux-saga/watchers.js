import { loadData, setProductId } from '../features/productsSlice';
import { takeEvery } from 'redux-saga/effects';
import {fetchProductsWorker} from './workers/fetchProductsWorker';
import { fetchProductByIdWorker } from './workers/fetchProductByIdWorker';

export function* fetchProductsWatcher() {
    yield takeEvery(loadData.type, fetchProductsWorker);
}
export function* fetchProductByIdWatcher() {
    yield takeEvery(setProductId.type, fetchProductByIdWorker);
}


