import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import APIKey from '../config';

const Search = () => {
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const locationId = '102974008';
    try {
      const response = await fetch(
        `https://linkedin-data-api.p.rapidapi.com/search-jobs?keywords=${keywords}&locationId=${locationId}&sort=mostRelevant`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': APIKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        navigate('/search-results', { state: { jobs: data.data } });
      } else {
        console.error('Error fetching jobs:', data.message);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Search for jobs..."
      />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
