import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIKey from '../config';

const JobPage = () => {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(
                    `https://linkedin-data-api.p.rapidapi.com/get-job-details?id=${id}`,
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
                    setJobDetails(data.data);
                } else {
                    console.error('Error fetching job details:', data.message);
                }
            } catch (error) {
                console.error('Error fetching job details:', error);
            }
        };

        fetchJobDetails();
    }, [id]);

    if (!jobDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="job-details-container">
            <img src={job.company.logo}></img>
            <h1>{jobDetails.title}</h1>
            <p className="job-description">{jobDetails.description}</p>
            <p className="job-details">
                <span className="detail-label">Location:</span> {jobDetails.location}
            </p>
            <p className="job-details">
                <span className="detail-label">Company:</span> {jobDetails.company.name}
            </p>
        </div>
    );
};

export default JobPage;
