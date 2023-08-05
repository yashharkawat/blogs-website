import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value.trim().toLowerCase());
  };

  return (
    <div>
      <input type="text" placeholder="Search by post, author, or topic " value={searchQuery} onChange={handleSearchChange} />
    </div>
  );
};

export default Search;
