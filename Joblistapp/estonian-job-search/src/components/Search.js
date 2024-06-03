import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { API_KEY } from './config';
import Button from '.components/Button';

const Search = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    datePosted: 'anyTime',
    jobType: '',
    experienceLevel: '',
    onsiteRemote: '',
    sort: 'mostRelevant',
  });

  const handleSearch = () => {
    const urlParams = new URLSearchParams({
      keywords: searchTerm,
      locationId: '102974008', // Replace with your Estonia location ID
      ...filters,
    });

    history.push(`/jobs?${urlParams.toString()}`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select name="datePosted" value={filters.datePosted} onChange={handleChange}>
        <option value="anyTime">Any Time</option>
        <option value="pastMonth">Past Month</option>
        <option value="pastWeek">Past Week</option>
        <option value="past24Hours">Past 24 Hours</option>
      </select>
      <select name="jobType" value={filters.jobType} onChange={handleChange}>
        <option value="">Job Type</option>
        <option value="fullTime">Full Time</option>
        <option value="partTime">Part Time</option>
        <option value="contract">Contract</option>
        <option value="internship">Internship</option>
      </select>
      <select name="experienceLevel" value={filters.experienceLevel} onChange={handleChange}>
        <option value="">Experience Level</option>
        <option value="internship">Internship</option>
        <option value="associate">Associate</option>
        <option value="director">Director</option>
        <option value="entryLevel">Entry Level</option>
        <option value="midSeniorLevel">Mid/Senior Level</option>
        <option value="executive">Executive</option>
      </select>
      <select name="onsiteRemote" value={filters.onsiteRemote} onChange={handleChange}>
        <option value="">Location</option>
        <option value="onSite">On-site</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <select name="sort" value={filters.sort} onChange={handleChange}>
        <option value="mostRelevant">Most Relevant</option>
        <option value="mostRecent">Most Recent</option>
        </select>
      <Button title="Search" onClick={handleSearch} />
    </div>
  );
};

export default Search;

