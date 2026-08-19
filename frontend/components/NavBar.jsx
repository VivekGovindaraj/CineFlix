import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const NavBar = () => {
    const location =  useLocation()
    const isSerachPath =  location.pathname === '/search'
  return (
    <>
        {/* <!-- Navbar --> */}

        <nav className="navbar navbar-expand-lg sticky-top topNavBar">
            <div className="container-fluid">
            {/* <!-- Logo --> */}
            <Link to="/"  className="navbar-brand text-white">
                Cine Prime
            </Link>
            
            {/* <!-- Mobile Toggle Button --> */}
            <button className="navbar-toggler bg-white d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu">

            <span className="navbar-toggler-icon"></span>
        </button>
            {/* <!-- Navbar Links --> */}
            <div className="navbar-collapse justify-content-between text-center d-none d-lg-flex"
                id="navbarContent">

                <ul className="navbar-nav mx-auto text-center">

                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/movies" className="nav-link">Movies</Link>
                </li>

                <li className="nav-item">
                    <Link to="/nowPlaying" className="nav-link">Now Playing</Link>
                </li>

                <li className="nav-item">
                    <Link to="/topRated" className="nav-link">Top Rated</Link>
                </li>

                <li className="nav-item">
                    <Link to="/popular" className="nav-link">Popular</Link>
                </li>

                <li className="nav-item">
                    <Link to="/upComing" className="nav-link">Upcoming</Link>
                </li>

                </ul>

                {/* <!-- Search Box --> */}
            <div className="d-flex flex-column align-items-center align-items-lg-end mt-3 mt-lg-0">

                {
                    !isSerachPath && (
                         <Link to='/search' className="searchBoxBtn btn "><i className="bi bi-search me-1"></i> Search</Link>
                    )
                }

               
                {/* <!-- <div className="input-group searchBox ">

                <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search"></i>
                </span>

                <input type="button" id="searchInputDesktop" className=" border-start-0 btn " value="Search....."  placeholder="Search...">
                <span className="input-group-text clear-btn d-none cusor-pointer bg-white">
                <i className="bi bi-x-lg fs-5 "></i>
                </span>
                </div>

                <div className="searchDropdown"></div>

                </div> --> */}

            </div>

            </div>
            </div>

        </nav>

   {/* <!-- Mobile Offcanvas --> */}
    <div
    className="offcanvas  offcanvas-start text-bg-dark bg-dark"
    tabIndex="-1"
    id="mobileMenu">

    <div className="offcanvas-header">

        <h5 className="offcanvas-title">
        Cine Prime
        </h5>

        <button
        type="button"
        className="btn-close btn-close-white"
        data-bs-dismiss="offcanvas">
        </button>

    </div>

    <div className="offcanvas-body">

        <ul className="navbar-nav ">

        {/* <!-- <li className="nav-item">
            <a href="index.html" className="nav-link active rounded-1">Home</a>
        </li> --> */}

        {/* <li className="nav-item">
            <Link to="/" className="nav-link rounded-1">Home</Link>
            
        </li> */}
        <li className="nav-item">
            <Link to="/movies" className="nav-link rounded-1">Movies</Link>
            
        </li>

        <li className="nav-item">
            <Link to="/nowPlaying" className="nav-link rounded-1">Now Playing</Link>
        </li>

        <li className="nav-item">
            <Link to="/topRated" className="nav-link rounded-1">Top Rated</Link>
            
        </li>

        <li className="nav-item">
            <Link to="/popular" className="nav-link rounded-1">Popular</Link>
        </li>

        <li className="nav-item">
            <Link to="/upComing" className="nav-link rounded-1">Upcoming</Link>
        </li>

        </ul>
    

    </div>

    </div>

       {/* <!-- mobile navbar --> */}
    <nav className="navbar navbar-dark fixed-bottom bottom-0 d-lg-none border-top-red mobileNavBar" >
    
        <div className="container-fluid d-flex justify-content-around align-items-center  py-3">
          <Link to="/search" className="text-white text-decoration-none nav-item-custom">
              <i className="bi bi-search fs-1"></i>
          </Link>
          <Link to="/" className="text-white text-decoration-none nav-item-custom">
              <i className="bi bi-house fs-1"></i>
          </Link>
          <Link to="#" className="text-white text-decoration-none nav-item-custom">
               <i className="bi bi-person-circle fs-1"></i>
          </Link>
          
        </div>
    
    </nav>
    </>
  )
}

export default NavBar