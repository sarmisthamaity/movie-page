import React from 'react';
import "../css/pagination.css"
const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage, prevPage, nextPage, goToPage, adjustedStartPage, endPage }) => {
  const pageNumbers = [];

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}, btn-style`}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>

      <div className="pagination-controls">
        <button className="btn-size btn-style" onClick={prevPage} disabled={currentPage === 1}>
          &#8592; prev
        </button>

        {Array.from({ length: endPage - adjustedStartPage + 1 }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(adjustedStartPage + i)}
            className={currentPage === adjustedStartPage + i ? "active" : ""}
          >
            {adjustedStartPage + i}
          </button>
        ))}

        <button className='btn-size btn-style' onClick={nextPage}
          disabled={currentPage === Math.ceil(totalMovies.length / moviesPerPage)}>
          next &#8594;
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
