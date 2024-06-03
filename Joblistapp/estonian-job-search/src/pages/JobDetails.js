import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../config';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://linkedin-data-api.p.rapidapi.com/get-job-details?id=${id}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com',
          },
        });

        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error(error);
        setError('Error fetching job details');
      } finally {
        setIsLoading(false)
    }
};

fetchJobDetails();
}, [id]);

return (
<div className="job-details">
  {isLoading && <p>Loading job details...</p>}
  {error && <p>Error: {error}</p>}
  {job && (
    <>
      <h1>{job.title}</h1>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      {/* Display other job details based on the API response structure */}
    </>
  )}
  {!job && !isLoading && <p>Job not found.</p>}
</div>
);
};

export default JobDetails;

