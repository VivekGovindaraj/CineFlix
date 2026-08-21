import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {

  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const pages = [];

  // Show only a reasonable number of page buttons
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Always show first page
  if (startPage > 1) {
    pages.push(1);

    if (startPage > 2) {
      pages.push("...");
    }
  }

  // Middle pages
  for (let page = startPage; page <= endPage; page++) {
    pages.push(page);
  }

  // Always show last page
  if (endPage < totalPages) {

    if (endPage < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 my-4">

      {/* Previous */}
      <button
        className="btn btn-secondary"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Pages */}
      {pages.map((page, index) => {

        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className="px-2 text-white"
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            className={`btn ${
              currentPage === page
                ? "btn-danger"
                : "btn-secondary"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        className="btn btn-secondary"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <i className="bi bi-chevron-right"></i>
      </button>

    </div>
  );
};

export default Pagination;