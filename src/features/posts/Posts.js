
import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchPosts = createAsyncThunk('posts/fetchPosts' , async() =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
})

const postsSlice = createSlice({
    name : 'posts',
    initialState :{
        isLoading : false,
        posts : [],
        error : null
    },
    extraReducers :(builder) =>{
        builder
            .addCase(fetchPosts.pending ,(state) =>{
            state.loading = true
            state.error = null
            })
            .addCase(fetchPosts.fulfilled , (state , action) =>{
                state.loading = false
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected , (state , action) =>{
                state.loading = false
                state.error = action.error.message
            })
    }

})

export default postsSlice.reducer