import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={term}
      onChange={handleChange}
      placeholder="Search for movies..."
    />
  );
};

export default Search;
