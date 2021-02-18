import { createSlice } from '@reduxjs/toolkit';



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
    origins: [],
    perPage: '',
    range: 1,
    minPrice: '',
    maxPrice: '',
    productId: ''
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
            state.product = action.payload
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
        },
        fetchProducts(state, action) {
            const {items, totalItems} = action.payload
            state.products = items            
            state.totalItems = totalItems
        },
        loadData(state) {
            state.status = 'loading'
        },
        setProductId(state, action) {
            state.productId = action.payload.id
        },
        loadDataById(state) {
            state.status= 'loading'
        }
    },
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
    fetchProducts,
    setMaxPrice, 
    setMinPrice,
    setOrigin,
    setRange,
    setPage,
    loadData,
    setProductId,
    loadDataById

} = productsSlice.actions