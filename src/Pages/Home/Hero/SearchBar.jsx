// SearchBar.js
import React, { useState } from 'react';
import './Hero.css'
const SearchBar = ({ setonSearch }) => {
  const [query, setQuery] = useState('');
  setonSearch(query);
  const handleSearch = () => {
    setonSearch(query);
  };

  return (
    <div className='relative mx-auto flex w-[500px] w-3xl items-center justify-between rounded-md border input__container shadow-lg'>
      <input  value={query} onChange={(e) => setQuery(e.target.value)} type="text" name="search" class="h-14 w-full rounded-md py-4 pr-40 pl-5 outline-none focus:ring-2" placeholder="Search by name" />
    <button onClick={handleSearch}  type="submit" class="absolute right-0 mr-1 inline-flex h-[56px] items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700">Search</button>
    </div>
  );
};

export default SearchBar;

    
