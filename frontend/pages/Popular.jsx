import React from 'react'
import { useGetPopularQuery } from '../src/services/movieAPI'
import MovieCard from '../components/MovieCard';


const Popular = () => {

  const {data, isLoading, isError} = useGetPopularQuery();

  const movies = data?.results || [];

  return (
    <>
    <div className="row-title ps-2">Popular</div>
    <div className="row row-gap-3 ps-2">
      {
        movies.map((movie) => (
          <MovieCard id={movie.id} movie={movie}/>
        ))
      }
    </div>
    </>
  )
}

export default Popular