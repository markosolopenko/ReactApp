import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCreatedProducts, getCreatedProductsById } from '../api/getCreatedProducts';

export const fetchCreatedProducts = createAsyncThunk(
    "api/getCreatedProducts",
    async () => {
        return await getCreatedProducts()
    }
)
export const fetchCreatedProductsById = createAsyncThunk(
    "api/getCreatedProductsById",
    async (id) => {
        return await getCreatedProductsById(id)
    }
)

export const formSlice = createSlice({
    name: 'formSlice',
    initialState: {
        products: [],
        productById: {},
        error: null,
        status: '',
        formInitState: [],
        editing: false
    },
    reducers: {
        setForAddProduct(state) {
            state.productById = {name: 'Marko', price: '222', origin: 'ASIA'}
        },
        setEditing(state, action) {
            state.editing = action.payload.bool
        },
        getPorductById(state, action) {
            state.productById = state.products.filter(product => 
                product._id === action.payload.id
            )
        }
    },
    extraReducers: {
        [fetchCreatedProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.error = null
        },
        // [fetchCreatedProductsById.fulfilled]: (state, action) => {
        //     const {name, price, origin} = action.payload
        //     state.status = 'succeeded'
        //     state.productById = {name, price, origin}
        //     state.error = null
        // }
    }
})


export const {
    setForAddProduct, 
    setEditing,
    getPorductById
} = formSlice.actions

