test('should handle the successful fetch with result', async () => {
  const user = {
    id: 1,
    firstName: 'FirstName',
    lastName: 'LastName',
  };
  
  const resolvePromise = new Promise((resolve, reject) => {
    resolve({
      ok: true,
      json: () => user,
    });
  });

  const fetchUsers = () => resolvePromise.then(res => res.json());

  await expect(fetchUsers()).resolves.toBe(user);
});

test('should handle the unsuccessful fetch correctly', async () => {
  const rejectPromise = new Promise((resolve, rejext) => {
    reject(new Error('This is an error.'));
  })
  
  const fetchFail = () => rejectPromise;

  await expect(fetchFail()).rejects.toThrow();
});
