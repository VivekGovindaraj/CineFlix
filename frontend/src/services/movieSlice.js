import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedMovie: null,
    movieCollection : []
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers : {
        setSelectedMovie : (state, action) => {
            state.selectedMovie = action.payload
        },

        clearSelectedMovie : (state) => {
            state.selectedMovie = null
        },
        setMovieCollection : (state) => {
            state.movieCollection = action.payload
        }
    }
})
export const {setSelectedMovie, clearSelectedMovie, setMovieCollection} = movieSlice.actions;
export default movieSlice.reducer