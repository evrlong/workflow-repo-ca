import { describe, expect } from 'vitest';
import { isActivePath } from './userInterface.js';

describe('isActivePath — exact match', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/login', '/login')).toBe(true);
    expect(isActivePath('/register', '/register')).toBe(true);
    expect(isActivePath('/', '/')).toBe(true);
  });
});

describe('isActivePath — root ("/")', () => {
  it('returns true when currentPath is "/"', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns true when currentPath is "/index.html"', () => {
    expect(isActivePath('/', '/index.html')).toBe(true);
  });
});

describe('isActivePath — includes', () => {
  it('returns true when current path includes the href', () => {
    expect(isActivePath('/login', '/login/index.html')).toBe(true);
    expect(isActivePath('/register', '/register/index.html')).toBe(true);
    expect(isActivePath('/products', '/products/123')).toBe(true);
  });
});

describe('isActivePath — excludes', () => {
  it('returns false when current path does not include the href', () => {
    expect(isActivePath('/register', '/product/123')).toBe(false);
  });
});
