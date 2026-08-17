import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../services/movieAPI.js";
import movieReducer from '../services/movieSlice.js'

export const store = configureStore({
    reducer: {
        [movieAPI.reducerPath] : movieAPI.reducer,
        movie:movieReducer

    },
    middleware :(getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(movieAPI.middleware)
    }
})
