import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ movies, genere }) => {
  const [allMovie] = useState(movies);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    FilteredGenere();
    
  }, [genere]);

  const FilteredGenere = () => {
    
    const updatedMovies = allMovie.filter(movie =>
      movie.genres.includes(genere)
    );
    
    setSelectedMovie(updatedMovies);
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };  

  return (

    <div className="movie-grid">
      <Slider {...settings}>
        {Array.isArray(selectedMovie) && selectedMovie.length > 0 ? selectedMovie.map((movie) => {
          return (
            <div key={movie.title} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3 className='title-font-size'>Name: {movie.title}</h3>
              <p className='remove-margin'>Year: {movie.release_year}</p>
              <p className='remove-margin'>IMDb: {movie.imdb_rating}</p>
              <p>Genres: {movie.genres}</p>
            </div>
          )
        }): <>
        <p>No movie found</p>
        </>}
      </Slider>

    </div>
  );
};

export default Carousel;
