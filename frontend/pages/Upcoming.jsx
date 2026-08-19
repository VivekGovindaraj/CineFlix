import React from 'react'
import { useGetUpcomingQuery } from '../src/services/movieAPI';
import MovieCard from '../components/MovieCard';

const Upcoming = () => {
   const {data, isLoading, isError} = useGetUpcomingQuery();

    const movies = data?.results || []
    return (
      <>
        <div className="row-title ps-2">Upcoming</div>
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

export default Upcoming