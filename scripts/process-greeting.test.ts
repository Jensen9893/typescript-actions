import { processGreeting } from './process-greeting';

describe('processGreeting', () => {
  beforeEach(() => {
    delete process.env.GREETING;
  });

  test('returns default greeting when GREETING is unset', () => {
    expect(processGreeting()).toBe('Processed greeting: Default Greeting');
  });

  test('returns custom greeting when GREETING is set', () => {
    process.env.GREETING = 'Hello, Alice';
    expect(processGreeting()).toBe('Processed greeting: Hello, Alice');
  });
});