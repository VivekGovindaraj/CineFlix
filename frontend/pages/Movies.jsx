import React, { useEffect, useMemo, useState } from 'react'
import { useGetNowPlayingQuery,useGetPopularQuery, useGetTopRatedQuery, useGetUpcomingQuery } from '../src/services/movieAPI'
import MovieCard from '../components/MovieCard';
import { useDispatch } from 'react-redux';
import Pagination from '../components/Pagination';
// import { setMovieCollection } from '../src/services/movieSlice';





const Movies = () => {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch();
  const {data:nowPlaying, isLoading:nowPlayingLoading, isError:nowPlayingError} = useGetNowPlayingQuery({page});
  const {data:popular, isLoading:popularLoading, isError:popularError} = useGetPopularQuery({page});
  const {data:topRated, isLoading:topRatedLoading, isError:topRatedError} = useGetTopRatedQuery({page});
  const {data:upcoming, isLoading:upcomingLoading, isError:upcomingError} = useGetUpcomingQuery({page});
  
  const uniqueMovies = useMemo(() => {
     const movies = [...(nowPlaying?.results) || [],
                  ...(popular?.results) || [], 
                  ...(topRated?.results) || [],
                   ...(upcoming?.results) || []]

      let movieMap = new Map( movies.map((movie) => [movie.id, movie]))

      return Array.from(movieMap.values())

  }, [nowPlaying, popular, topRated, upcoming])

   const handlePageChange = (newPage) => {
    setPage(newPage)

    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  
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

          <Pagination currentPage={page} totalPages={nowPlaying?.total_pages || 1} onPageChange={handlePageChange}/>
    </>
   
  )
}

export default Movies