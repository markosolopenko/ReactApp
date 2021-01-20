import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../api/getProducts';


export const fetchProducts = createAsyncThunk(
    "api/getProducts",
    async (page) => {
        return await getProducts(page)
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
        showSelectedNumberProductsPerPage(state, action) { 
            if(parseInt(action.payload.number)) {
                state.products = state.initialItems.slice(0, Number(action.payload.number))
                state.productsToShow = state.products
            }else {
                state.products = state.initialItems
                state.productsToShow = state.products
            }  
        },
        showProductsByPrices(state, action) {
            const {min, max} = action.payload
            state.products = state.initialItems.filter(product => 
                Number(product.price) >= Number(min) && Number(product.price) <= Number(max))
            if(min === 0 && max === 0) {
                state.products = state.productsToShow
            }
        },
        showSelectedOrigins(state, action) {
            const { checked, origin } = action.payload
            if(checked === true) {
                state.products = state.initialItems.filter(product => product.origin === origin)
                state.productsToShow = [...state.productsToShow, ...state.products]
                state.products = state.productsToShow
            }
            if(checked === false) {
                state.products = state.products.filter(product => product.origin !== origin)
                state.productsToShow = state.products
            }
            if (state.products.length === 0) {
                state.products = state.initialItems
            }
        },

    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            const { totalItems, items } = action.payload 
            state.totalItems = totalItems
            state.products = [...state.products, ...items]
            state.status = 'succeeded'
            state.error = undefined
            state.initialItems = [...state.initialItems, ...items]
            items.forEach(product => 
                !state.origins.includes(product.origin) ? state.origins.push(product.origin): null)
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
    showSelectedOrigins,
    showProductsByPrices,
    showSelectedNumberProductsPerPage

} = productsSlice.actions