import React, { useState, useEffect } from 'react';
// import './MovieGrid.css';
import "../css/movie.css";
import Pagination from './Pagination';
import movies from "../movies.json";

const MovieList = ({ searchTerm }) => {

  console.log(searchTerm, "searchTerm in movie list component");

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  const maxPageNumbersToShow = 3;

  // Get current movies for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  // Adjust start page if endPage is close to the total pages
  const adjustedStartPage = Math.max(1, endPage - maxPageNumbersToShow + 1);

  const filteredMovies = movies.filter((movie) => {
    const title = movie.title ? movie.title.toString().toLowerCase() : '';
    // console.log("title", title);

    const genres = movie.genres ? movie.genres.toString().toLowerCase() : '';

    // console.log("genres", genres);
    const searchOutPut = title.includes(searchTerm.toLowerCase()) || genres.includes(searchTerm.toLowerCase());

    return searchOutPut;

  });

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {currentMovies.length > 0 ? currentMovies.map((movie, index) => (
          <div className="col-sm-3" key={index}>
            <div className="card">
              <img src={movie.poster} className="card-img-top img-size" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Year: {movie.release_year}</p>
                <p className="card-text">Rating: {movie.imdb_rating}</p>
                <p className="card-text">Genres: {movie.genres}</p>
                <p className="card-text">Duration: {movie.length_in_min} min</p>
                <a href={movie.movie_url} className="btn btn-primary">More About Movie</a>
              </div>
            </div>
          </div>
        )) : (
          <p>No movies found matching your search.</p>
        )}
        {/* {currentMovies.map((movie, index) => {

          return (
            <div className="col-sm-3" key={index}>
              <div className="card">
                <img src={movie.poster} className="card-img-top img-size" alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">Year: {movie.release_year}</p>
                  <p className="card-text">Rating: {movie.imdb_rating}</p>
                  <p className="card-text">Genres: {movie.genres}</p>
                  <p className="card-text">Duration: {movie.length_in_min} min</p>

                  <a href={movie.movie_url} className="btn btn-primary">More About Movie</a>
                </div>
              </div>
            </div>
          )
        })} */}
      </div>

      <Pagination
        moviesPerPage={moviesPerPage}
        nextPage={nextPage}
        prevPage={prevPage}
        endPage={endPage}
        totalMovies={movies.length}
        adjustedStartPage={adjustedStartPage}
        goToPage={goToPage}
        paginate={paginate}
        currentPage={currentPage}
      />

      {/* {
        filteredMovies.length > 0 ? (
          <Pagination
            moviesPerPage={moviesPerPage}
            nextPage={nextPage}
            prevPage={prevPage}
            endPage={endPage}
            totalMovies={movies.length}
            adjustedStartPage={adjustedStartPage}
            goToPage={goToPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        ) : ((
          <p>No movies found matching your search.</p>
        ))
      } */}

      {/* {
        filteredMovies.length > 0 && (
          <Pagination
            moviesPerPage={moviesPerPage}
            nextPage={nextPage}
            prevPage={prevPage}
            endPage={endPage}
            totalMovies={filteredMovies.length}
            adjustedStartPage={adjustedStartPage}
            goToPage={goToPage}
            paginate={paginate}
            currentPage={currentPage}
          />
        )
      } */}

    </div>
  );
};

export default MovieList;
