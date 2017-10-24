
import {add, throws} from './index';
import errorFunction from './errorFunction';

jest.mock('./errorFunction');
errorFunction.mockImplementation(() => 'errorFunction');

describe('#### 1', () => {
  test('1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2);
  });
  test('adding null and a number works', () => {
    expect(add(null, 1)).toBe(1);
  });
  test('adding nothing returns NaN', () => {
    expect(add()).toEqual(NaN);
  });
});

describe('#### 2', () => {
  test('Testing auto mocking', done => {
    expect(throws(1)).toBe(1);
    done();
  });
});
