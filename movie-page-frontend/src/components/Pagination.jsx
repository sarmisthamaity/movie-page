import React from 'react';
import "../css/pagination.css";

const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalMovies / moviesPerPage);  

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li>
            <button onClick={() => paginate(currentPage - 1)}>&#8592; prev</button>
          </li>
        )}

        {pageNumbers.slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2)).map(number => (
          <li key={number} className={number === currentPage ? 'active' : ''}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <button onClick={() => paginate(currentPage + 1)}
              >next &#8594;</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
