import React from 'react'

import { useGetNowPlayingQuery, useGetTopRatedQuery, useGetPopularQuery, useGetUpcomingQuery, useGetAnimeQuery } from '../src/services/movieAPI';
import MovieRow from '../components/MovieRow';
import MovieModal from '../components/MovieModal';


const Home = () => {

    const { data: nowPlayingData, isLoading:nowPlayingLoading, isError:nowPlayingError } = useGetNowPlayingQuery();
    const { data: topRatedData,  isLoading:topRatedLoading, isError:topRatedError} = useGetTopRatedQuery();
    const { data: popularData,  isLoading:popularLoading, isError:popularError} = useGetPopularQuery();
    const { data: upcomingData , isLoading:upcomingLoading, isError:upcomingError} = useGetUpcomingQuery();
    const { data: animieData, isLoading, isError } = useGetUpcomingQuery();
    console.log(nowPlayingData, topRatedData, popularData, upcomingData,animieData)

  
    const nowPlayingMovies = nowPlayingData?.results || [];
    const topRatedMovies = topRatedData?.results || [];
    const popularMovies = popularData?.results || [];
    const upcomingMovies = upcomingData?.results || [];
    const animieMovies = animieData?.results || [];

   

  return (
    <>

   <div className="banner-container " style={{backgroundImage: `url('./batman-collage-game-rant-2.avif')`}}>
    <div className="banner-content">
        <h1 className="display-4 fw-bold banner-movie-title">Batman</h1>
        <p>Watch only on CinePrime...</p>
        <button className="btn btn-danger playBtn me-2">Play</button>
        <button className="btn btn-secondary">More Info</button>
    </div>

   </div>
  

   <div className="movieContainer container-fluid mt-3 px-0">
      {/* section now playing */}
    <MovieRow id="nowPlaying" title="Now Playing" scroll="scroll-btn1" movies={nowPlayingMovies} />

    {/* section top Rated */}
    <MovieRow id="topRated" title="Top Rated" scroll="scroll-btn2" movies={topRatedMovies} />

    {/* section popular */}
    <MovieRow id="Popular" title="Popular" scroll="scroll-btn3" movies={popularMovies} />

    {/* section upcoming */}
    <MovieRow id="upComing" title="Upcoming" scroll="scroll-btn4" movies={upcomingMovies} />

    {/* section anime*/}
    {/* <MovieRow id="upComing" title="Animation" scroll="scroll-btn4" movies={animieMovies} /> */}

       
   </div>


    </>
  )
}

export default Home