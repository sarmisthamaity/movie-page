import React, { useState } from 'react';
import movies from "../data/movies.json";
import MovieList from '../components/MovieList';
import Filter from '../components/Filter';
import Pagination from "../components/Pagination"

const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(4);

  // Handle Filtering
  const handleFilter = (filters) => {
    // console.log("filters in home jsx file", typeof filters.rating);
    
    let updatedMovies = movies;

    if (filters.genre) {
      updatedMovies = updatedMovies.filter(movie =>
        movie.genres.includes(filters.genre)
      );
    }

    if (filters.releaseYear) {
      updatedMovies = updatedMovies.filter(movie =>{
        return movie.release_year === filters.releaseYear;
      });
    }

    if (filters.rating) {
      // console.log("hello world");
      
      updatedMovies = updatedMovies.filter(movie =>{
        // console.log(typeof movie.imdb_rating, "movie.imdb_rating", movie.imdb_rating);
        // console.log(typeof filters.rating, "filters.rating", filters.rating);
        
        
        return movie.imdb_rating >= filters.rating;
      });
    }

    if(filters.title) {
      
      updatedMovies = movies.filter((movie) => {        
        const movieTitle = typeof movie.title === "string" ? movie.title.trim() : "";
        const filterTitle = typeof filters.title === "string" ? filters.title.trim() : "";
        if(movieTitle.includes(filterTitle)) {
          return movieTitle.includes(filterTitle);
        }
        // return movieTitle === filterTitle;
      });


      // console.log("updatedMovies", updatedMovies);
      


    }

    setFilteredMovies(updatedMovies);
  };

  
  // console.log("filteredMovies", filteredMovies);
  
  // Pagination Logic  
  let indexOfLastMovie = currentPage * moviesPerPage;
  let indexOfFirstMovie = indexOfLastMovie - moviesPerPage;  
  let currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  if(currentMovies.length === 0) {
    currentMovies = filteredMovies;
  }
  
  // console.log("currentMovies", currentMovies);
  
  const paginate = (pageNumber) => {    
    setCurrentPage(pageNumber);

  };

  return (
    <div>
      <Filter onFilter={handleFilter}/>
      <MovieList movies={currentMovies} />
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={filteredMovies.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
