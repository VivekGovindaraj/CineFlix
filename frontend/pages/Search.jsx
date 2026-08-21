import React, { useState } from "react";
import { useSearchMoviesQuery } from "../src/services/movieAPI";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";


const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] =  useState(1)

  const {
    data,
    isLoading,
    isError
  } = useSearchMoviesQuery({
    keyword:searchTerm,
    page:page
  }, {
    skip: !searchTerm.trim()
  });

  const movies = data?.results || [];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1)
  };

  const handlePageChange = (newpage) => {
    setPage(newpage)
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <div className="container-fluid mt-4">

      {/* Search Box */}
      <div className="row justify-content-center">

        <div className="col-12 col-md-12 col-lg-12">

          <div className="input-group">

            <span className="input-group-text">
              <i className="bi bi-search"></i>
            </span>

            <input
              type="text"
              className="form-control py-2"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearch}
            />

          </div>

        </div>

      </div>

      {/* Title */}
      {searchTerm && (
        <div className="row-title mt-4 ps-2">
          Search Results for "{searchTerm}"
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="text-center mt-4">
          Loading...
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="text-center mt-4 text-danger">
          Failed to load movies.
        </div>
      )}

      {/* No Results */}
      {!isLoading && searchTerm && movies.length === 0 && (
        <div className="text-center mt-4">
          No movies found.
        </div>
      )}

      {/* Movies */}
      <div className="row row-gap-3 mt-4 ps-2">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

         {/* Pagination */}
      {searchTerm && data && (
        <Pagination
          currentPage={data.page}
          totalPages={data.total_pages}
          onPageChange={handlePageChange}
        />
      )}


      </div>

    </div>
  );
};

export default Search;