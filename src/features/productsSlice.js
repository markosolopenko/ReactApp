import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../api/getProducts';


export const fetchProducts = createAsyncThunk(
    "api/getProducts",
    async () => {
        return await getProducts()
    } 
)


const initialState = {
    amountAddedProducts: 0,
    sumOfPricesAddedProducts: 0,
    product: {}, 
    cartPageProducts: [],
    cartPageSetProducts: [],
    status: '',
    error: null,
    products: [],
    totalItems: 0,
    page: 0
}

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState, 
    reducers: {
        countGenerallyAddedProducts(state, action) {
            state.amountAddedProducts += action.payload.count
            state.sumOfPricesAddedProducts += action.payload.price
        },
        setProductToDetailsPage(state, action) {
            state.product = action.payload.product
        },
        addProductsToCartPage(state, action) {
            state.cartPageProducts = [...state.cartPageProducts, ...action.payload.array]
        },
        addProductsToCartPageSet(state, action) {
            state.cartPageSetProducts =  [...state.cartPageSetProducts, action.payload.product]
        },
        decreaseProductFromDetails(state) {
            state.cartPageProducts.slice(0, state.cartPageProducts.length - 1)
        },
        deleteProductFromCart(state, action) {
            const { id } = action.payload
            state.cartPageSetProducts = state.cartPageSetProducts.filter(product => product.id !== id)
            state.cartPageProducts = state.cartPageProducts.filter(product => product.id !== id)
        },
        subtractProductFromCart(state, action) {
            state.cartPageProducts.splice(action.payload.index, 1)
        },
        subtractFromAddedProducts(state, action) {
            state.amountAddedProducts -= action.payload.count
            state.sumOfPricesAddedProducts -= action.payload.price
        },
        takesDataFromInput(state, action) {
            const { count, price } = action.payload
            if(action.payload.count) {
                state.amountAddedProducts += count
                state.sumOfPricesAddedProducts += price
            }    
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload.items
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { totalItems, items, page } = action.payload 
            state.products = items
            state.page = page
            state.totalItems = totalItems
            state.status = 'succeeded'
            state.error = undefined
        }
    }
}) 

export const {
    countGenerallyAddedProducts,
    setProductToDetailsPage,
    addProductsToCartPage,
    addProductsToCartPageSet,
    decreaseProductFromDetails,
    deleteProductFromCart ,
    subtractProductFromCart,
    subtractFromAddedProducts,
    takesDataFromInput
            } = productsSlice.actions