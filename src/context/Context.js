import React, { useReducer } from 'react'


export const Context = React.createContext();

export const ACTIONS = {
    ADD_TO_CART: 'add-to-cart',
    ADD_PRODUCT_TO_DETAILS: 'add-product-to-details',
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    ADD_DETAILS_TO_CART: 'add-details-to-cart',
    DELETE_PRODUCT: 'delete-product',
    ADD_PRODUCT_TO_CART: 'add-product-to-cart',
    DELETE_FROM_CART: 'delete-from-cart',
    IF_EXIST: 'if-exist'
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TO_CART: 
            return {
                ...state,
                count: state.count + 1,
                sum: state.sum + action.payload.value,
            }
        case ACTIONS.DELETE_FROM_CART: 
            return {
                ...state,
                count: state.count - 1,
                sum: state.sum - action.payload.value,
            }
        case ACTIONS.ADD_PRODUCT_TO_DETAILS:
            return {
                ...state,
                product: action.payload.product
            }
        case ACTIONS.INCREMENT:
            return {
                ...state,
                detailsCount: state.detailsCount + 1,
                detailsSum: state.detailsSum + state.product.price,
                ifExist: [...state.ifExist, state.product]
            }
        case ACTIONS.DECREMENT:
            return {
                ...state,
                detailsCount: state.detailsCount - 1,
                detailsSum: state.detailsSum - state.product.price,
                ifExist: state.ifExist.slice(0, state.ifExist.length - 1)
            }
        case ACTIONS.ADD_DETAILS_TO_CART:
            return {
                ...state,
                count: state.count + state.detailsCount,
                sum: state.sum + state.detailsSum,
                cartProducts: [...state.cartProducts, state.product],
                ifExist: [...state.ifExist]
            } 
        case ACTIONS.DELETE_PRODUCT: 
            return {
                ...state, 
                cartProducts: state.cartProducts.filter(product => product.id !== action.payload.id)
            }
        case ACTIONS.ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cartProducts: [...state.cartProducts, action.payload.product],
            } 
        case ACTIONS.IF_EXIST:
            return {
                ...state,
                ifExist: [...state.ifExist, action.payload.product]
            }
        default:
            return state;
    }
}

export const HandleDetail = (props) => {
    const initStates = {
        count: 0,
        sum: 0,
        product: {},
        detailsCount: 0,
        detailsSum: 0,
        cartProducts: [],
        ifExist: []
    }
    const [state, dispatch] = useReducer(reducer, initStates) 

    const values = { state, dispatch}
    return (
        <Context.Provider value={values}>
            {props.children}
        </Context.Provider>
    )
}
