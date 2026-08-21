import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetMovieVideosQuery } from '../src/services/movieAPI';


const MovieDeatils = () => {
  const {id} = useParams();

  const {data, isLoading, isError} = useGetMovieVideosQuery(id);

  const videos = data?.results || [];

  console.log(videos)

  const trailer = videos.find((video) => {
    video.site === "YouTube" && video.type === "Trailer"
  })

  if (!trailer) {
    return (
      <div className="text-center mt-5">
        Trailer not available.
      </div>
    );
  }


   if (isLoading) {
    return <div className="text-center mt-5">Loading trailer...</div>;
  }

  if (isError) {
    return (
      <div className="text-center mt-5 text-danger">
        Failed to load trailer.
      </div>
    );
  }


  return (
    <div className="container-fluid mt-4">

      <h2 className="row-title ps-2">
        Movie Trailer
      </h2>

      <div className="ratio ratio-16x9 mt-3">

        <iframe   src={`https://www.youtube/embed/${trailer.key}`} title={trailer.name} allowFullScreen></iframe>

      </div>

      <div class="movie-details mt-4">

        <h1 id="movieTitle" class="h3 h-md-1 fw-bold"></h1>

        <div class="d-flex flex-wrap gap-3 my-3 align-items-center">

            <span>
            <i class="bi bi-star-fill"></i> <span id="movieRating"></span>
            </span>

            <span>
                Year : <span id="movieYear"></span>
            </span>

            <span id="movieGenres"></span>

        </div>

        <h5 class="my-3">Overview:</h5>
        <p id="movieOverview"></p>
          
      </div>

    </div>
  );
}

export default MovieDeatils