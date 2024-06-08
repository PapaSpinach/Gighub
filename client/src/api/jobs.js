import { fetchAPI } from '.';

export function getAllJobs() {
  return fetchAPI('/jobs');
}

export function createJob({
  title,
  postedBy,
  description,
  hourlyPay,
  email,
  phoneNumber,
}) {
  return fetchAPI('/jobs/createJob', {
    method: 'POST',
    body: JSON.stringify({
      title,
      postedBy,
      description,
      hourlyPay,
      email,
      phoneNumber,
    }),
  });
}

export function findJob(id) {
  return fetch(`/jobs/${id}`);
}
