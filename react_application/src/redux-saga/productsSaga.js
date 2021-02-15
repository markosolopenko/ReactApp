import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getProducts, getProdcutById } from '../api/getProducts';
import { fetchProducts, loadData, loadDataById, setProductId, setProductToDetailsPage } from '../features/productsSlice';


function* sagaFetchProducts() {
    const store = (state) => state;
    const {productsSlice} = yield select(store);
    const {page, perPage, origins, minPrice, maxPrice} = productsSlice;
    const data = yield call(getProducts, page, perPage, origins, minPrice, maxPrice);
    yield put(fetchProducts(data.items));
}
function* sagaFetchProductById() {
    const store = (state) => state;
    const {productsSlice} = yield select(store);
    const {productId} = productsSlice;
    const data = yield call(getProdcutById, productId);
    yield put(setProductToDetailsPage(data))
}

export function* watchFetchProducts() {
    yield takeEvery(loadData.type, sagaFetchProducts);
    yield takeEvery(setProductId.type, sagaFetchProductById);
}
