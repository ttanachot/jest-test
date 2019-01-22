describe('Mock fetch function', () => {
  const mockData = { value: 'Hello World' };

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve({
          ok: true, 
          json: () => mockData,
        });
      });
    });
  });

  it('should fetch successfully', async () => {
    const response = await fetch('/data').then(res => res.json());
    expect(response.value).toMatch(/Hello World/);
  });
});