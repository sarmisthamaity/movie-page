import React, { useState } from 'react';
import Select from 'react-select';

const genresOptions = [
  { value: 'Drama', label: 'Drama' }
];

const MovieFilter = ({ onFilterChange }) => {
  const [lengthRange, setLengthRange] = useState([0, 60]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleLengthChange = (e) => {
    const newRange = [Number(e.target.value[0]), Number(e.target.value[1])];
    setLengthRange(newRange);
    triggerFilterChange(newRange, selectedGenres);
  };

  const handleGenreChange = (selectedOptions) => {
    const genres = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setSelectedGenres(genres);
    triggerFilterChange(lengthRange, genres);
  };

  const triggerFilterChange = (lengthRange, genres) => {
    onFilterChange({ lengthRange, genres });
  };

  return (
    <div className="filters">
      <h3>Filter Movies</h3>

      <div className="filter-item">
        <label>Length (minutes): {lengthRange[0]} - {lengthRange[1]}</label>
        <input
          type="range"
          min="0"
          max="60"
          value={lengthRange[1]}
          onChange={(e) => handleLengthChange(e)}
          step="1"
          className="slider"
        />
      </div>

      <div className="filter-item">
        <label>Genres</label>
        <Select
          isMulti
          options={genresOptions}
          onChange={handleGenreChange}
        />
      </div>
    </div>
  );
};

export default MovieFilter;
