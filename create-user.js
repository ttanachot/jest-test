import fetch from 'node-fetch';

export const createUser = async (user) => {
  const response = await fetch(
    '/user',
    {
      method: 'POST',
      body: JSON.stringify(user)
    },
  );

  const { userId } = await response.json();
  return userId;
};