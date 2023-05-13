import {configureStore} from '@reduxjs/toolkit'
import { docsReducer } from './docsSlice'

export const store = configureStore({
    reducer: {
        docs: docsReducer
    }
})


