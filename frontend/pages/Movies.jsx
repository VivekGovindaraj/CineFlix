import React, { useEffect, useMemo } from 'react'
import { useGetNowPlayingQuery,useGetPopularQuery, useGetTopRatedQuery, useGetUpcomingQuery } from '../src/services/movieAPI'
import MovieCard from '../components/MovieCard';
import { useDispatch } from 'react-redux';
// import { setMovieCollection } from '../src/services/movieSlice';



const Movies = () => {

  const dispatch = useDispatch();
  const {data:nowPlaying, isLoading:nowPlayingLoading, isError:nowPlayingError} = useGetNowPlayingQuery();
  const {data:popular, isLoading:popularLoading, isError:popularError} = useGetPopularQuery();
  const {data:topRated, isLoading:topRatedLoading, isError:topRatedError} = useGetTopRatedQuery();
  const {data:upcoming, isLoading:upcomingLoading, isError:upcomingError} = useGetUpcomingQuery();
  
  const uniqueMovies = useMemo(() => {
     const movies = [...(nowPlaying?.results) || [],
                  ...(popular?.results) || [], 
                  ...(topRated?.results) || [],
                   ...(upcoming?.results) || []]

      let movieMap = new Map( movies.map((movie) => [movie.id, movie]))

      return Array.from(movieMap.values())

  }, [nowPlaying, popular, topRated, upcoming])
  
  // useEffect(() => {
  //   dispatch(setMovieCollection(uniqueMovies))
  // }, [uniqueMovies, dispatch])
  return (
    <>
     <div className="row-title ps-2">All Movies</div>
      <div className='row row-gap-3 mt-3 ps-2'>
          {
          uniqueMovies?.map((movie, index) => (
                      <MovieCard key={`${movie.id}-${index}`} movie={movie} />
                  ))
          }
          
        </div>
    </>
   
  )
}

export default Movies