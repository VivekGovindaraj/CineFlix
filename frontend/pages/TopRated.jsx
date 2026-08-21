import React, { useState } from 'react'
import { useGetTopRatedQuery } from '../src/services/movieAPI';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';


const TopRated = () => {
  const [page, setPage] = useState(1)
  const {data, isLoading, isError} = useGetTopRatedQuery({page});

  const handlePageChange = (newPage) => {
    setPage(newPage)

    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

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

          <Pagination currentPage={data?.page} totalPages={data?.total_pages} onPageChange={handlePageChange}/>
          
        </div>
      </>
    )
}

export default TopRated