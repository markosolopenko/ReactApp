import { createSlice } from '@reduxjs/toolkit';

export const inputSlice = createSlice({
    name: "detailsPage",
    initialState: {
        value: 0
    },
    reducers: {
        handleChange(state, action) {
            state.value = Number(action.payload.value)
        },
        addToInput(state) {
            state.value += 1
        },
        subtractFromInput(state) {
            state.value -= 1
        }
    }
})

export const { handleChange, addToInput, subtractFromInput } = inputSlice.actions