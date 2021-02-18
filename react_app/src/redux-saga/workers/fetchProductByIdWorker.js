import { call, put, select } from 'redux-saga/effects';
import {getProdcutById} from '../../api/getProducts';
import {setProductToDetailsPage} from '../../features/productsSlice';



export function* fetchProductByIdWorker() {
    const store = (state) => state;
    const {productsSlice} = yield select(store);
    const {productId} = productsSlice;
    const data = yield call(getProdcutById, productId);
    yield put(setProductToDetailsPage(data))
}