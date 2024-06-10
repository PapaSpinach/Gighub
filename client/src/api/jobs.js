import { fetchAPI } from '.';

export function getAllJobs() {
  return fetchAPI('/jobs');
}

export function createJob({ title, description, hourlyPay }) {
  return fetchAPI('/jobs/createJob', {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      hourlyPay,
    }),
  });
}

export function findJob(id) {
  return fetch(`/jobs/${id}`);
}
