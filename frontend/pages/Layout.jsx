import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import MovieModal from '../components/MovieModal'


const Layout = () => {
  return (
    <>
    
    <NavBar/>

    <main>
        <Outlet/>
    </main>

    <MovieModal/>
    
    
    </>
  )
}

export default Layout