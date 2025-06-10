const API_BASE_URL = 'https://682f7b0af504aa3c70f433b9.mockapi.io/api';
const RESOURCE = '/data';

export const getCandiList = async () => {
  const response = await fetch(`${API_BASE_URL}${RESOURCE}`);
  return await response.json();
};

export const postCandi = async (newCandi) => {
  const response = await fetch(`${API_BASE_URL}${RESOURCE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCandi),
  });
  return await response.json();
};

export const deleteCandi = async (id) => {
  const response = await fetch(`${API_BASE_URL}${RESOURCE}/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};
