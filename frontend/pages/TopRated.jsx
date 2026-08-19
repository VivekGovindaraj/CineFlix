import React from 'react'
import { useGetTopRatedQuery } from '../src/services/movieAPI';
import MovieCard from '../components/MovieCard';

const TopRated = () => {
  const {data, isLoading, isError} = useGetTopRatedQuery();

    const movies = data?.results || []
    return (
      <>
        <div className="row-title ps-2">Top Rated</div>
        <div className='row row-gap-3 mt-3 ps-2'>
          {
          movies?.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                  ))
          }
          
        </div>
      </>
    )
}

export default TopRated