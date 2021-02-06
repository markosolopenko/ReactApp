import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCreatedProducts, getCreatedProductsById } from '../api/getCreatedProducts';
import { getOrderProductsByNickname } from '../api/getOrderProducts';

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

export const fetchOrderProductsByNickname = createAsyncThunk(
    "api/getOrderProductsByNickname",
    async (nickname) => {
        return await getOrderProductsByNickname(nickname)
        
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
        id: '',
        productByNickname: [],
        dateOfOrder: "",
        nickname: '',
        orderedProducts: {}
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
        },
        setNickname(state, action) {
            state.nickname = action.payload.nickname
        },
        setOrderedProductAmount(state, action) {
            const {name, amount} = action.payload
            state.orderedProducts[name] = amount
        }
    },
    extraReducers: {
        [fetchCreatedProducts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.products = action.payload
            state.error = undefined
        },
        [fetchCreatedProductsById.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.productById = action.payload
            state.error = null
        },
        [fetchOrderProductsByNickname.fulfilled]: (state, action) => {
            if(action.payload) {
                state.status = 'succeeded'
                state.productByNickname = action.payload.orderedProducts
                state.error = undefined
                state.dateOfOrder = action.payload.date 
                state.orderedProducts = action.payload.amountOrderedProducts
            }
              
        },
    }
})


export const { 
    setProductForEdit,
    setId,
    resetEditForm,
    setDateOfOrder,
    setNickname,
    setOrderedProductAmount
} = formSlice.actions

