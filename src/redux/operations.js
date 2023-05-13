import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchDocs = createAsyncThunk('docs/fetchDocs', async () => {
    const { data } = await axios.get('/docs')
    return data
})
export const fetchRemove = createAsyncThunk('docs/fetchRemove', async (id) => {
     await axios.delete(`/doc/${id}`)
})