import React from 'react'
import { useGetPopularQuery } from '../src/services/movieAPI'
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';



const Popular = () => {
   const [page, setPage] = useState(1)
  const {data, isLoading, isError} = useGetPopularQuery({page});

  const movies = data?.results || [];

   const handlePageChange = (newPage) => {
    setPage(newPage)

    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <>
    <div className="row-title ps-2">Popular</div>
    <div className="row row-gap-3 ps-2">
      {
        movies.map((movie) => (
          <MovieCard id={movie.id} movie={movie}/>
        ))
      }

                <Pagination currentPage={data?.page} totalPages={data?.total_pages} onPageChange={handlePageChange}/>

    </div>
    </>
  )
}

export default Popular