test('should test result successfully', () => {
  const result = 'This is a test result.';

  expect(result).toBe('This is a test result.');
  expect(result).toMatch(/test/);
  expect(result).not.toBeNull();
});

test('should get result correctly', () => {
  const result = [
    {
      id: 1,
      value: 'First',
      createdAt: new Date(),
    },
    {
      id: 2,
      value: 'Second',
      createdAt: new Date(),
    },
  ];
  const expected = [
    expect.objectContaining({
      id: 1,
      value: expect.any(String),
      createdAt: expect.any(Date),
    }),
    expect.objectContaining({
      id: 2,
      value: expect.any(String),
      createdAt: expect.any(Date),
    }),
  ];
  expect(result).toEqual(expect.arrayContaining(expected));
});