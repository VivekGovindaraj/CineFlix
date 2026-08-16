import React from 'react'

const Home = () => {

      const handleScroll = (direction) => {
        console.log("Scroll direction:", direction);
    };


  return (
    <>
        
  {/* <!-- Navbar --> */}

   <nav className="navbar navbar-expand-lg sticky-top topNavBar">
    <div className="container-fluid">
      {/* <!-- Logo --> */}
      <a href="index.html" className="navbar-brand text-white">
        Cine Prime
      </a>
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
            <a href="index.html" className="nav-link active">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="movies.html" className="nav-link">
              Movies
            </a>
          </li>

          <li className="nav-item">
            <a href="nowPlaying.html" className="nav-link">
              Now Playing
            </a>
          </li>

          <li className="nav-item">
            <a href="topRated.html" className="nav-link">
              Top Rated
            </a>
          </li>

          <li className="nav-item">
            <a href="popular.html" className="nav-link">
              Popular
            </a>
          </li>

          <li className="nav-item">
            <a href="upComing.html" className="nav-link">
              Upcoming
            </a>
          </li>

        </ul>

        {/* <!-- Search Box --> */}
       <div className="d-flex flex-column align-items-center align-items-lg-end mt-3 mt-lg-0">

        <button className="searchBoxBtn btn "><i className="bi bi-search me-1"></i> Search</button>
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
  tabindex="-1"
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

      <li className="nav-item">
        <a href="movies.html" className="nav-link rounded-1">Movies</a>
      </li>

      <li className="nav-item">
        <a href="nowPlaying.html" className="nav-link rounded-1">Now Playing</a>
      </li>

      <li className="nav-item">
        <a href="topRated.html" className="nav-link rounde-1">Top Rated</a>
      </li>

      <li className="nav-item">
        <a href="popular.html" className="nav-link rounded-1">Popular</a>
      </li>

      <li className="nav-item">
        <a href="upComing.html" className="nav-link rounded-1">Upcoming</a>
      </li>

    </ul>
   

  </div>

</div>



   <div className="banner-container " style={{backgroundImage: `url('./batman-collage-game-rant-2.avif')`}}>
    <div className="banner-content">
        <h1 className="display-4 fw-bold banner-movie-title">Batman</h1>
        <p>Watch only on CinePrime...</p>
        <button className="btn btn-danger playBtn">Play</button>
        <button className="btn btn-secondary">More Info</button>
    </div>

   </div>
  

   <div className="movieContainer container-fluid mt-3 px-0">

    <div className="row-title" id="nowPlaying">&emsp13;Now Playing</div>

    {/* <div className="movie-wrapper">
      <button className="scroll-btn scroll-btn1 left d-lg-block d-none" onClick="scrollRow(this, -300)"><</button>
       <div className="movie-row px-3 mt-2 nowPlaying d-flex" ></div>
        <button className="scroll-btn scroll-btn1 right d-lg-block d-none" onClick="scrollRow(this, 300)">></button>
    </div> */}
   
         

    

    <div className="row-title mt-2" id="topRated">&emsp13;Top Rated</div>
    {/* <div className="movie-wrapper">
      <button className="scroll-btn scroll-btn2 left d-lg-block d-none" onClick="scrollRow(this, -300)"><</button>
    <div className="movie-row px-3 mt-2 topRated d-flex" ></div>

      <button className="scroll-btn scroll-btn2 right d-lg-block d-none" onClick="scrollRow(this, 300)">></button>
    </div> */}
      
      

    

    <div className="row-title mt-2" id="Popular">&emsp13;Popular</div>

     <div className="movie-wrapper">
    
      
       <div className="movie-row px-3 mt-2 Popular d-flex " > </div>
        <div className="d-flex justify-content-between">
        {/* <button className="scroll-btn scroll-btn3 left d-lg-block d-none" onClick="scrollRow(this, -300)"><</button>
          <button className="scroll-btn scroll-btn3 right d-lg-block d-none" onClick="scrollRow(this, 300)">></button> */}
      </div> 
    
    </div>

    <div className="row-title mt-2" id="upComing">&emsp13;Upcoming</div>
     <div className="movie-wrapper">
      {/* <button className="scroll-btn scroll-btn4 left d-lg-block d-none" onClick="scrollRow(this, -300)"><</button> */}
    <div className="movie-row px-3 mt-2 upComing d-flex "  >
   
    </div>
    {/* <button className="scroll-btn scroll-btn4 right d-lg-block d-none" onClick="scrollRow(this, 300)">></button> */}
    </div>
         
       
   </div>

   {/* <!-- mobile navbar --> */}
<nav className="navbar navbar-dark fixed-bottom bottom-0 d-lg-none border-top-red mobileNavBar" >

    <div className="container-fluid d-flex justify-content-around align-items-center  py-3">
      <a href="search.html" className="text-white text-decoration-none nav-item-custom">
        <i className="bi bi-search fs-1"></i>
      </a>
      <a href="index.html" className="text-white text-decoration-none nav-item-custom">
        <i className="bi bi-house fs-1"></i>
      </a>
      <a href="#" className="text-white text-decoration-none nav-item-custom">
        <i className="bi bi-person-circle fs-1"></i>
      </a>
    </div>

   </nav>


    


   {/* <!-- modal movie --> */}

   <div className="modal fade rounded-lg-5 rounded-0" id="myModal">
    <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-custom ">
      <div className="modal-content bg-dark text-white">

      {/* <!-- Modal Header --> */}
      <div className="modal-header p-0 ms-0 me-3 mt-3 mb-0">
         <button type="button" className="btn-close bg-white btn-cls float-end" data-bs-dismiss="modal"  ></button>
       
      </div>

       {/* <!-- Modal body --> */}
      <div className="modal-body  p-3 p-md-4">
        <div className="row g-3 align-items-center">
           <div className="col-12 col-md-5 mx-auto py-0 ps-0 pe-1 img-container ">
           

           </div>
           <div className="col-12 col-md-7 mt-3 mt-md-0 px-3 px-md-0">
             <h3 className="display-6 fw-medium movieTitle">NIGHT CARNAGE</h3>

             <div className="d-flex flex-wrap gap-2 mt-4">
                 <button className="btn btn-danger btn-small text-center rounded-3 playBtn"><i className="bi bi-play-fill"></i> Play</button>
                <button className="btn btn-secondary btn-small mx-2 watchLateBtn"><i className="bi bi-clock"></i> Watch later</button>
                <button className="btn btn-secondary btn-small downloadBtn"><i className="bi bi-download"></i> Download</button>
             </div>

             <div className="d-flex flex-wrap gap-2 mt-3 align-items-center">
                 <h4 className="relasedYear display-7">Year: 2026</h4>
                 <h4 className="display-7 ms-2"><i className="bi bi-star-fill mx-2 fs-medium"></i><span className="movieRating">9.8</span></h4>
                <h4 className="voteCount  display-7 ms-2">Vote : 72835</h4>
                </div>
             
             <h5 className="display-7 mt-3">Overview:</h5>
             <p className="lead display-12 movieOverview mt-2">A blogger who is also a werewolf meets a dashing playboy with a dark secret of his own. Starring Logan Andrews and Christian Howard.</p>
             
             
             

             

           </div>
        
        </div>

         {/* <!-- <h6 className="mt-4 recommendedMoviesTiltle hide">Recommended Movies</h6>
        <div className="recommendedMovies d-flex flex-wrap gap-2 mt-2 "></div> --> */}
       
      </div>

      {/* <!-- Modal footer -->
      <!-- <div className="modal-footer">
        
      </div> --> */}

    </div>
  </div>
</div>

{/* <!-- modal ends--> */}

    </>
  )
}

export default Home