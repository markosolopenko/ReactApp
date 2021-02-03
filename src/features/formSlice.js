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
        productById: {name: '', price: '', origin: ''},
        error: null,
        status: '',
        editing: false,
        id: ''
    },
    reducers: {
        setProductForEdit(state, action) {
            state.productById = action.payload.product
        },
        resetEditForm(state, action) {
            state.productById = action.payload.product
        },
        setId(state, action) {
            state.id = action.payload.id
        }
    },
    extraReducers: {
        [fetchCreatedProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.error = null
        },
        // [fetchCreatedProductsById.fulfilled]: (state, action) => {
        //     state.status = 'succeeded'
        //     state.productById = action.payload
        //     state.error = null
        // }
    }
})


export const { 
    setProductForEdit,
    setId,
    resetEditForm
} = formSlice.actions

