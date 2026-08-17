import React from "react";
import { TMDB_IMAGE_URL } from "../src/services/tmdb.js";
import { setSelectedMovie } from "../src/services/movieSlice.js";
import { useDispatch } from "react-redux";



const MovieCard = ({ movie}) => {

  const dispatch = useDispatch();

  const handleMovieClick = () => {
    dispatch(setSelectedMovie(movie))
  }

  return (
      <div className="col-4 col-sm-3 col-lg-2" onClick={handleMovieClick}>

        <img
            src={`${TMDB_IMAGE_URL}${movie?.poster_path}`}
            className="movie-card "
            alt={movie?.original_title}
            loading="lazy"
            data-movie={encodeURIComponent(JSON.stringify( movie))}
            />

        </div>
  );
};

export default MovieCard;