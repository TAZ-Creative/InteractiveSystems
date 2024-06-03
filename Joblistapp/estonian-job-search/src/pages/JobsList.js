import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import JobCard from '.components/Jobcard.js';
import { API_KEY } from '../config';

const JobsList = () => {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);

      const queryParams = new URLSearchParams(location.search);
      const keywords = queryParams.get('keywords') || '';
      const filters = {
        locationId: '102974008', 
        ...Object.fromEntries(queryParams), 
      };

      try {
        const response = await fetch('https://linkedin-data-api.p.rapidapi.com/search-jobs', {
          method: 'GET',
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
          },
          params: filters,
        });

        const data = await response.json();
        setJobs(data.jobs); // Assuming jobs data is in 'jobs' key of response
      } catch (error) {
        console.error(error);
        setError('Error fetching jobs');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [location]);

  return (
    <div className="jobs-list">
      {isLoading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      {jobs.length > 0 && (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
        </ul>
      )}
      {!isLoading && jobs.length === 0 && <p>No jobs found.</p>}
    </div>
  );
};

export default JobsList;
