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
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchCreatedProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.error = null
        },
        [fetchCreatedProductsById.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.productById = action.payload
            state.error = null
        }
    }
})

