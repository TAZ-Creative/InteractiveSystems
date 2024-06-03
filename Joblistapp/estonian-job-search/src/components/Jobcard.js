// Jobcards.jsx
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.postedAt}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobCard;
