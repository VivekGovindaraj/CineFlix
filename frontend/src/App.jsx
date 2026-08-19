import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Movies from '../pages/Movies'
import Nowplaying from '../pages/Nowplaying'
import TopRated from '../pages/TopRated'
import Popular from '../pages/Popular'
import Upcoming from '../pages/Upcoming'
import Search from '../pages/Search'
import MovieDetails from '../pages/MovieDetails'
import { Provider } from "react-redux";
import { store } from './app/store'
import Layout from '../pages/Layout'






function App() {


  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
      <Routes >
      <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/movies/:id" element={<MovieDetails/>}/>
          <Route path="/nowPlaying" element={<Nowplaying/>}/>
          <Route path="/topRated" element={<TopRated/>}/>
          <Route path="/popular" element={<Popular/>}/>
          <Route path="/upcoming" element={<Upcoming/>}/>
          <Route path="/search" element={<Search/>}/>
      </Route>
      </Routes>
    </Provider>
     
    </BrowserRouter>
    
    </>
  )
}

export default App
