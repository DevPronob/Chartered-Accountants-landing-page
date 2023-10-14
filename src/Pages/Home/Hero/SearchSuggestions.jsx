import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchSuggestions = ({ suggestions }) => {
  // Check if there are suggestions or if the input bar is empty
  const [suggestionClick,onSuggestionClick] =useState([])
  const navigate =useNavigate()
  console.log(suggestionClick)

  const nagivateToDetail = id=>{
    console.log(id)
    navigate(`/${id}`)
  }
   
  if (!suggestions || suggestions.length === 0) {
    return null;
  }


  

  return (
    <ul className="mt-4 space-y-4">
    {suggestions.map((charteredAccountant) => (
      <li
        key={charteredAccountant._id}
        onClick={()=>nagivateToDetail(charteredAccountant._id)} 
        className="cursor-pointer p-4 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        <div className="text-xl font-semibold text-gray-800">
          {charteredAccountant.name}
        </div>
        {/* <div className="text-sm text-gray-600">
          {charteredAccountant.description}
        </div> */}
        {/* <div className="text-blue-500 font-semibold text-sm mt-2 hover:text-blue-700 transition-colors">
          Connect
        </div> */}
      </li>
    ))}
  </ul>
  
  );
};

export default SearchSuggestions;
