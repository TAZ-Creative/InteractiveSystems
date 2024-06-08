import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Jobcards from '../components/Jobcards';
import APIKey from '../config';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add state for loading


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://linkedin-data-api.p.rapidapi.com/search-jobs?keywords=&locationId=102974008&sort=mostRecent`,
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
          setJobs(data.data.slice(0, 25)); // Get only the first 15 jobs for "Jobs this week" section
        } else {
          console.error('Error fetching jobs:', data.message);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (success or error)
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Search />  

      <section className="hero">
        <div className='hero-text'>
          <h1 className='big-text'>Find Recently Posted Jobs in Estonia</h1>
          <p>Search for your dream job in Estonia, the heart of digital innovation. Explore exciting opportunities across various industries and companies.</p>
        </div>
        <img src="heroimg.png" alt="Hero Image" />
      </section>

      <section className="jobs-this-week">
        <h2>Job Vacancies in Estonia This Week</h2>
          {isLoading ? (
           <div className="loading-icon">
           <img src="Joblistappv2/job-finder/public/assets/loading.gif" alt="Loading" />
           </div>
         ) : (
           <div className="job-card-container">
            {jobs.map((job) => (
            <Jobcards key={job.id} job={job} />
           ))}
         </div>
          )}
      </section>

      <section className="contact">
        <h2>Contact the Creator</h2>
        <p>Feel free to contact us with any questions or feedback: <a href="mailto:azeem@tazcreative.io">azeem@tazcreative.io</a></p>
      </section>
    </div>
  );
};

export default Home;
