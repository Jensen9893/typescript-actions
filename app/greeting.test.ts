import { greet } from './greeting';

describe('greet function', () => {
  test('greets with name', () => {
    expect(greet('Alice')).toBe('Hello, Alice! Welcome to our app!');
  });

  test('greets with empty name', () => {
    expect(greet('')).toBe('Hello, ! Welcome to our app!');
  });
});