import { fetchAPI } from '.';

export async function register({
  username,
  email,
  password,
  fullName,
  phoneNumber,
  specialties,
}) {
  const formattedSpecialties = specialties.split('\n');

  await fetchAPI('/register', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
      fullName,
      phoneNumber,
      specialties: formattedSpecialties,
    }),
  });
}

export async function login({ email, password }) {
  const { token, currentUser } = await fetchAPI('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  return { token, currentUser };
}
