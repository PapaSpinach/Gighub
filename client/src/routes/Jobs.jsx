import { useState, useEffect } from 'react';
import Job from '../components/Jobs';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const data = await fetch('./api/jobs');
      const jobsArray = await data.json();
      console.log('data: ', data);
      setJobs(jobsArray);
    } catch (error) {
      console.log('Err: ', error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <main className="max-w-2xl mx-auto space-y-8 p-8">
      {jobs.map((job) => (
        <Job key={job.title} job={job} />
      ))}
    </main>
  );
}
