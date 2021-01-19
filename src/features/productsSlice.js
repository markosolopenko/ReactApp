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
    initialItems: [],
    products: [],
    totalItems: 0,
    page: 0,
    productsToShow: [],
    showedOrigins: [],

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
        showSelectedOrigins(state, action) {
            const { checked, origin } = action.payload
            if(checked === true) {
                state.products = state.initialItems.filter(product => product.origin === origin)
                state.showedOrigins.push(action.payload.origin)
            }else if(checked === false && state.showedOrigins.includes(origin)) {
                state.products = state.products.filter(product => product.origin !== origin)
                state.showedOrigins = state.showedOrigins.filter(ori => origin !== ori)
                state.productsToShow = state.productsToShow.filter(product => product.origin !== origin)
            }
            if (state.products.length === 0) {
                state.products = state.initialItems
            }else {
                state.productsToShow = [...state.productsToShow, ...state.products]
                state.products = state.productsToShow
            }
           
        },
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { totalItems, items, page } = action.payload 
            state.page = page
            state.totalItems = totalItems
            state.products = items
            state.status = 'succeeded'
            state.error = undefined
            state.initialItems = items
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        },
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
    takesDataFromInput,
    handleCheckbox,
    showSelectedOrigins

} = productsSlice.actions