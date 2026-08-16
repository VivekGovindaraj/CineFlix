import React from "react";
import { TMDB_IMAGE_URL } from "../src/services/tmdb.js";

const MovieCard = ({ movie, onClick }) => {

  return (
      <div className="col-4 col-sm-3 col-lg-2">

        <img
            src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
            className="movie-card "
            alt={movie.original_title}
            loading="lazy"
            data-movie={encodeURIComponent(JSON.stringify( movie))}
            data-bs-toggle="modal"
            data-bs-target="#myModal" />

        </div>
  );
};

export default MovieCard;