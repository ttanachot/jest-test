import { isPrime } from './util';

describe('Util test suite', () => {
  it('should check prime number correctly', () => {
    const result = isPrime(2);
    expect(result).toBeTruthy();
  });
});
