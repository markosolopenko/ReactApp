import { call, put, select } from 'redux-saga/effects';
import { getProducts } from '../../api/getProducts';
import {fetchProducts} from '../../features/productsSlice';


export function* fetchProductsWorker() {
    const store = (state) => state;
    const {productsSlice} = yield select(store);
    const {page, perPage, origins, minPrice, maxPrice} = productsSlice;
    const data = yield call(getProducts, {page, perPage, origins, minPrice, maxPrice});
    yield put(fetchProducts(data));
}



