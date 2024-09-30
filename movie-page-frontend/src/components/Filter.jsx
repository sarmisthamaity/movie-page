import React, { useState } from 'react';

const Filter = ({ onFilter }) => {

  const [ searchInput, setSearchInput ] = useState('');
  const [filters, setFilters] = useState({ genre: '', releaseYear: '', rating: '', title: '' });

  const handleGenreChange = (e) => {
    setFilters({
      ...filters,
      genre: e.target.value
    });
    onFilter({
      ...filters,
      genre: e.target.value
    });
  };

  const handleYearChange = (e) => {
    setFilters({
      ...filters,
      releaseYear: parseInt(e.target.value, 10)
    });
    onFilter({
      ...filters,
      releaseYear: parseInt(e.target.value, 10)
    });
  };

  // console.log("filters", filters);

  const handleRatingChange = (e) => {

    // console.log("e.target.value", e.target.value);

    // setRatingInput(parseFloat(e.target.value));
    setFilters({
      ...filters,
      rating: parseFloat(e.target.value)
    });
    onFilter({
      ...filters,
      rating: parseFloat(e.target.value)
    });
  };

  const handleMovieTitleChange = (e) => {
    // console.log(e.target.value, "kkkkkkkkkkkkkkk");
    
    setSearchInput(e.target.value);
    // setFilters({
    //   ...filters,
    //   title: e.target.value
    // });
    // onFilter({
    //   ...filters,
    //   title: e.target.value
    // });
  };

  // console.log("searchInput", searchInput);
  
  const handleChange = (e) => {
    e.preventDefault();

    setFilters({
      ...filters,
      title: searchInput
    });
    onFilter({
      ...filters,
      title: searchInput
    });
  };

  return (
    <div className="filters">
      <select onChange={handleGenreChange}>
        <option value="">All Genres</option>
        <option value="Drama">Drama</option>
        <option value="Adventure">Adventure</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Family">Family</option>
        <option value="Romance">Romance</option>
        <option value="Comedy">Comedy</option>
      </select>

      <input type="number" placeholder="Year" onChange={handleYearChange} />
      <input type="number" step="0.1" placeholder="Min IMDb Rating" onChange={handleRatingChange} />

      <input type="text" onChange={handleMovieTitleChange} placeholder="Search for movies..."/>
      <button onClick={(e) => handleChange(e)}>click</button>
    </div>
  );
};

export default Filter;
