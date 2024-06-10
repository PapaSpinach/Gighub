import { fetchAPI } from '.';

export function getAllContractors() {
  return fetchAPI('/contractors');
}
