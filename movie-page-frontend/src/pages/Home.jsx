import React, { useState } from 'react';
import movies from "../data/movies.json";
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);
  const [show, setIsShow] = useState("");
  const [genere, setGenere] = useState("");
  
  const handleFilter = (filters) => {
    
    let updatedMovies = movies;
    if (filters.genre) {
      setIsShow(filters.genre);
      setGenere(filters.genre);
    }

    if (filters.releaseYear) {
      setIsShow("");
      updatedMovies = updatedMovies.filter(movie =>{
        return movie.release_year === filters.releaseYear;
      });
    }

    if (filters.rating) {
      setIsShow("");
      
      updatedMovies = updatedMovies.filter(movie =>{        
        return movie.imdb_rating >= filters.rating;
      });
    }

    if(filters.title) {
      setIsShow("");
      
      updatedMovies = movies.filter((movie) => {        
        const movieTitle = typeof movie.title === "string" ? movie.title.trim() : "";
        const filterTitle = typeof filters.title === "string" ? filters.title.trim() : "";
        if(movieTitle.includes(filterTitle)) {
          return movieTitle.includes(filterTitle);
        }
      });
    }

    setFilteredMovies(updatedMovies);
  };

  let indexOfLastMovie = currentPage * moviesPerPage;
  let indexOfFirstMovie = indexOfLastMovie - moviesPerPage;  
  let currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  if(currentMovies.length === 0) {
    currentMovies = filteredMovies;
  }
    
  const paginate = (pageNumber) => {    
    setCurrentPage(pageNumber);

  };

  // console.log(show, "hello world >>>>>>>>>>>>>>");
  

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <MovieList movies={currentMovies} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={filteredMovies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {show ? <Carousel show={show} movies={movies} genere={genere}/> : <></>}
    </div>
  );
};

export default Home;
