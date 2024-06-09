export const API_URL = 'http://localhost:3001/api';

export async function fetchAPI(url, options) {
  const authToken = localStorage.getItem('token');

  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? `Bearer ${JSON.parse(authToken)}` : undefined,
    },
  });

  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }

  return res.json();
}
