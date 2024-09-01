import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  const handleChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
