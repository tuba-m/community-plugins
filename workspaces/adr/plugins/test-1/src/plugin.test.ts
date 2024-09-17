import { test1Plugin } from './plugin';

describe('test-1', () => {
  it('should export plugin', () => {
    expect(test1Plugin).toBeDefined();
  });
});
