import React from 'react';
import "../css/movie.css";

const MovieList = ({ movies }) => {
  
  return (
    <div className="movie-grid">
      {Array.isArray(movies) && movies.length > 0 ? movies.map((movie) => {        
        return(
          <div key={movie.title} className="movie-card">
          <img src={movie.poster} alt={movie.title} />
          <h3 className='title-font-size'>Name: {movie.title}</h3>
          <p className='remove-margin'>Year: {movie.release_year}</p>
          <p className='remove-margin'>IMDb: {movie.imdb_rating}</p>
          <p>Genres: {movie.genres}</p>
        </div>
        )
      }): <p style={{textAlign: "center", }}>Movie Not Found</p>}
    </div>
  );
};

export default MovieList;
