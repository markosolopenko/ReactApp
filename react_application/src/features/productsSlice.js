import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../api/getProducts';


export const fetchProducts = createAsyncThunk(
    "api/getProducts",
    async ({page, perPage, origins, minPrice, maxPrice}) => {
        return await getProducts({page, perPage, origins, minPrice, maxPrice})
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
    totalItems: 0,
    page: 1,
    initialItems: [],
    products: [],
    productsToShow: [],
    origins: [],
    perPage: '',
    range: 1,
    minPrice: '',
    maxPrice: ''
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
            state.cartPageSetProducts = state.cartPageSetProducts.filter(product => 
                product.id !== id
            )
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
        productsPerPage(state, action) {
            state.perPage = action.payload.number
        },
        setOrigin(state, action) {
            const {origin} = action.payload
            if(state.origins.includes(origin)) {
                state.origins = state.origins.filter(el => el !== origin)
            }else {
                state.origins.push(origin)
            }
            
        },
        setMinPrice(state, action) {
            state.minPrice = action.payload.min
        },
        setMaxPrice(state, action) {
            state.maxPrice = action.payload.max
        },
        setPage(state, action) {
            state.page = action.payload.page
        },
        setRange(state) {
            state.range = Math.ceil(state.totalItems / state.perPage)
            state.page = 1
        },
        handleArrowBack(state) {
            state.page -= 1
        },
        handleArrowForward(state) {
            state.page += 1
        },
        setPriceOfSpecificProducts(state, action) {
            state.cartPageSetProducts = action.payload.totalSum 
        },
        handleOrderEvent(state) {
            state.amountAddedProducts = 0
            state.sumOfPricesAddedProducts = 0
            state.cartPageProducts = []
            state.cartPageSetProducts = []
        }
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { totalItems, items } = action.payload    
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
    decreaseProductFromDetails,
    setPriceOfSpecificProducts,
    subtractFromAddedProducts,
    addProductsToCartPageSet,
    subtractProductFromCart, 
    setProductToDetailsPage,
    deleteProductFromCart,
    addProductsToCartPage,
    handleArrowForward,
    takesDataFromInput,
    handleOrderEvent,
    handleArrowBack,
    productsPerPage,
    setMaxPrice, 
    setMinPrice,
    setOrigin,
    setRange,
    setPage,

} = productsSlice.actions