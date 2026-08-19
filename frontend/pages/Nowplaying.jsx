import React from 'react'
import { useGetNowPlayingQuery } from '../src/services/movieAPI'
import MovieCard from '../components/MovieCard';


const Nowplaying = () => {

  const {data, isLoading, isError} = useGetNowPlayingQuery();

    const movies = data?.results || []
    return (
      <>
        <div className="row-title ps-2">Now Playing</div>
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

export default Nowplaying