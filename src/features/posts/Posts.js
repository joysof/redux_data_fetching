
import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const base_url = 'https://jsonplaceholder.typicode.com/posts'
export const fetchPosts = createAsyncThunk('posts/fetchPosts' , async() =>{
    const response = await axios.get(base_url)
    return response.data
    
})
export const deletePost = createAsyncThunk('posts/deletePost' , async (id) =>{
    await axios(`${base_url}/${id}`,{
        method : 'Delete'
    })
    return id
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
            state.isLoading = true
            state.error = null
            })
            .addCase(fetchPosts.fulfilled , (state , action) =>{
                state.isLoading = false
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected , (state , action) =>{
                state.isLoading = false
                state.error = action.error.message
            })
            .addCase(deletePost.fulfilled ,(state , action) =>{
                state.posts = state.posts.filter(p => p.id !== action.payload)
            })
    }

})

export default postsSlice.reducer