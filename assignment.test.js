import {add} from './index';

describe('Add tests', () => {
  test('1+1 = 2', () => {
    expect(add(1, 1)).toBe(2);
  });
  test('adding null and a number works', () => {
    expect(add(null, 1)).toBe(1);
  });
  test('adding nothing returns NaN', () => {
    expect(add()).toEqual(NaN);
  });
});
