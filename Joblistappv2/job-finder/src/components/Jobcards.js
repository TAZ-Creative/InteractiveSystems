import React from 'react';
import { useNavigate } from 'react-router-dom';

const Jobcards = ({ job }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.id}`);
  };


  return (
    <div className="job-card" onClick={handleClick}>
      <img src={job.company.logo}></img>
      <h2>{job.title}</h2>
      <p className="location">{job.location}</p>
      <p className="post-date">{job.postDate}</p>
      <p className="company-name">{job.company.name}</p>
    </div>
  );
};

export default Jobcards;
