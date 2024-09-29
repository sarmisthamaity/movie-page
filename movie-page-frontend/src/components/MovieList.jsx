import React from 'react';
import "../css/movie.css";

const MovieList = ({ movies }) => {
  
  return (
    <div className="movie-grid">
      {movies.map((movie) => {        
        return(
          <div key={movie.title} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3 className='title-font-size'>Name: {movie.title}</h3>
          <p className='remove-margin'>Year: {movie.release_year}</p>
          <p className='remove-margin'>IMDb: {movie.imdb_rating}</p>
          <p>Genres: {movie.genres}</p>
        </div>
        )
      })}
    </div>
  );
};

export default MovieList;
