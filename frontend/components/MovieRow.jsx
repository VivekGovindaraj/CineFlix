import React, {useRef} from 'react'
import MovieCard from './MovieCard'


const MovieRow = ({title, id, scroll, movies}) => {
  const movieRowRef = useRef(null);

  const scrollRow = (direction) => {
    movieRowRef.current?.scrollBy({
      left: direction,
      behavior: "smooth",
    });
  };
  return (
    <>
    <section className="movie-section">

       <div className="row-title ps-2" id={id}>{title}</div>
         <button className={`scroll-btn ${scroll} left d-lg-block d-none`}  onClick={() => scrollRow(-300)}><i className="bi bi-chevron-left"></i></button>
        <div className="movie-row px-3 mt-2 d-flex" ref={movieRowRef}>
            {
                movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </div>
        <button className={`scroll-btn ${scroll} right d-lg-block d-none`}  onClick={() => scrollRow(300)}><i className="bi bi-chevron-right"></i></button>
   

    </section>
    </>
  )
}

export default MovieRow