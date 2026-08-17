import React from "react";
import { TMDB_IMAGE_URL } from "../src/services/tmdb.js";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedMovie } from "../src/services/movieSlice.js";

const MovieModal = () => {

 const dispatch = useDispatch();

  const selectedMovie = useSelector(
    (state) => state.movie?.selectedMovie
  );

 if(!selectedMovie){
   return null
 }

 const handleClose = () => {
   dispatch(clearSelectedMovie())
 }
  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down modal-custom">

        <div className="modal-content bg-dark text-white">

          {/* Header */}
          <div className="modal-header p-0 ms-0 me-3 mt-3 mb-0">

            <button
              type="button"
              className="btn-close bg-white btn-cls"
              onClick={handleClose}
            >
            </button>

          </div>

          {/* Body */}
          <div className="modal-body p-3 p-md-4">

            <div className="row g-3 align-items-center">

              {/* Poster */}
              <div className="col-12 col-md-5 mx-auto py-0 ps-0 pe-1 pe-sm-4 img-container">

                <img
                   src={`${TMDB_IMAGE_URL}${selectedMovie?.poster_path}`}
                  alt={selectedMovie?.title}
                  className="img-fluid rounded"
                />

              </div>

              {/* Movie information */}
              <div className="col-12 col-md-7 mt-3 mt-md-0 px-3 px-md-0">

                <h3 className="display-6 fw-medium">
                  {selectedMovie?.title}
                </h3>

                <div className="d-flex flex-wrap gap-2 mt-4">

                  <button className="btn btn-danger btn-small">
                    <i className="bi bi-play-fill"></i>
                    {" "}Play
                  </button>

                  <button className="btn btn-secondary btn-small">
                    <i className="bi bi-clock"></i>
                    {" "}Watch later
                  </button>

                  <button className="btn btn-secondary btn-small">
                    <i className="bi bi-download"></i>
                    {" "}Download
                  </button>

                </div>

                <div className="d-flex flex-wrap gap-2 mt-3 align-items-center">

                  <h4 className="display-7">
                    Year:{" "}
                    {selectedMovie?.release_date
                      ? new Date(selectedMovie?.release_date).getFullYear()
                      : "N/A"}
                  </h4>

                  <h4 className="display-7 ms-2">

                    <i className="bi bi-star-fill mx-2 fs-medium"></i>

                    {selectedMovie?.vote_average
                      ? selectedMovie?.vote_average.toFixed(1)
                      : "N/A"}

                  </h4>

                  <h4 className="display-7 ms-2">
                    Vote: {selectedMovie?.vote_count ?? "N/A"}
                  </h4>

                </div>

                <h5 className="display-7 mt-3">
                  Overview:
                </h5>

                <p className="lead display-12 movieOverview mt-2">
                  {selectedMovie?.overview || "No overview available."}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MovieModal;