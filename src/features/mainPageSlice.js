import { createSlice } from '@reduxjs/toolkit';


export const mainPageSlice = createSlice({
    name: 'handleAddToCartClick',
    initialState: {
        amountAddedProducts: 0,
        sumOfPricesAddedProducts: 0,
        product: {}, 
        cartPageProducts: [],
        cartPageSetProducts: [],
    }, 
    reducers: {
        summarizeAll(state, action) {
            const { value, price } = action.payload.payload
            return {
                ...state, 
                amountAddedProducts: state.amountAddedProducts + value,
                sumOfPricesAddedProducts: state.sumOfPricesAddedProducts + price,
            }
        },
        setDetailsPageProduct(state, action) {
            const { product } = action.payload.payload
            return {
                ...state,
                product: product
            }
        },
        addProductsToCartPage(state, action) {
            const { array } = action.payload.payload
            
            return {
                ...state,
                cartPageProducts: [...state.cartPageProducts, ...array]
            }
        },
        addProductsCartPageSet(state, action) {
            const { product } = action.payload.payload
            return {
                ...state,
                cartPageSetProducts: [...state.cartPageSetProducts, product]
            }
        },
        decreaseProductFromCart(state, action) {
            return {
                ...state,
                cartPageProducts: state.cartPageProducts.slice(0, state.cartPageProducts.length - 1)
            }
        },
        deleteProductFromCart(state, action) {
            const { id, count, value } = action.payload.payload
            return {
                ...state,
                cartPageSetProducts: state.cartPageSetProducts.filter(product => product.id != id),
                amountAddedProducts: state.amountAddedProducts - count,
                sumOfPricesAddedProducts: state.sumOfPricesAddedProducts - value,
            }
        }
    }
}) 