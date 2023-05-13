import { createSlice } from "@reduxjs/toolkit";
import { fetchDocs, fetchRemove } from "./operations";

const docsSlice = createSlice({
    name: 'docs',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchDocs.pending]: (state) => {
            state.items = []
            state.isLoading = false
            state.error = null
        },
        [fetchDocs.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = true
            state.error = null
        },
        [fetchDocs.pending]: (state, action) => {
            state.items = []
            state.isLoading = false
            state.error = action.payload
        },
        [fetchRemove.pending]: (state, action) => {
            state.items = state.items.filter(e => e._id !== action.meta.arg)
        },
    }
})

export const docsReducer = docsSlice.reducer