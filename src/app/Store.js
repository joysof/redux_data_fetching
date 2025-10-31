import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/Posts'
const store = configureStore({
    reducer :{
        posts : postsReducer
    }
})

export default store