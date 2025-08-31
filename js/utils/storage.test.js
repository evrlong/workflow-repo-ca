/** @vitest-environment jsdom */
import { getUsername, userKey as KEY } from './storage.js';

beforeEach(() => {
  localStorage.clear();
});

describe('getUsername', () => {
  it('returns the name from the user object in storage (after saving)', () => {
    localStorage.setItem(KEY, JSON.stringify({ name: 'Ola' })); // <- "first save"
    expect(getUsername()).toBe('Ola');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
