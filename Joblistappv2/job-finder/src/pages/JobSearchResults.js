import React from 'react';
import { useLocation } from 'react-router-dom';
import Jobcards from '../components/Jobcards';
import Search from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JobSearchResults = () => {
    const location = useLocation();
    const jobs = location.state?.jobs || [];

    return (
        <div>
            <main >
                <Search />
                <h1>Job Search Results</h1>
                {jobs.length > 0 ? (
                    jobs.map((job) => <Jobcards key={job.id} job={job} />)
                ) : (
                    <p>No jobs found.</p>
                )}
            </main>
        </div>
    );
};

export default JobSearchResults;
