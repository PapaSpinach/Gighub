import { fetchAPI } from '.';

export async function register({
  username,
  email,
  password,
  fullName,
  phoneNumber,
}) {
  await fetchAPI('/register', {
    method: 'POST',
    body: JSON.stringify({ username, email, password, fullName, phoneNumber }),
  });
}

export async function login({ email, password }) {
  const { token } = await fetchAPI('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  return token;
}
