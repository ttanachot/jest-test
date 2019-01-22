jest.mock('node-fetch');

import fetch from 'node-fetch';
import { createUser } from './create-user';

describe('Unit test suite', () => {

  it('should create user successfully', async () => {
    fetch.mockReturnValue(
      Promise.resolve({
        json: () => ({ userId: 'someId' }),
      })
    );
    const mockUser = { username: 'someUsername' };
    const userId = await createUser(mockUser);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      '/user',
      {
        method: 'POST',
        body: JSON.stringify(mockUser),
      },
    );
    expect(userId).toBe('someId');
  });

});