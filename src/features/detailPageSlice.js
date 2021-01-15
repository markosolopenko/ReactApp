import { createSlice } from '@reduxjs/toolkit';

export const detailPageSlice = createSlice({
    name: "detailsPage",
    initialState: {
        detailsCount: 0,
        detailsSum: 0,
    },
    reducers: {
        increment(state, action) {
            const { value } = action.payload.payload
            return {
                ...state,
                detailsCount: state.detailsCount + 1,
                detailsSum: state.detailsSum + value
            }
        },
        decrement(state, action) {
            const { value } = action.payload.payload
            return {
                ...state,
                detailsCount: state.detailsCount - 1,
                detailsSum: state.detailsSum - value
            }
        },
        handleChange(state, action) {
            const { value } = action.payload.payload
            return {
                ...state,
                detailsCount: Number(value),
            }
        },

    }
})