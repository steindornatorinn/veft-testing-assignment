
import {add, throws} from './index';
import errorFunction from './errorFunction';
import * as indexModule from './index';

jest.mock('./errorFunction');
errorFunction.mockImplementation(() => 'errorFunction');

describe('#### 1', () => {
  test('1+1 = 2', () => {
    expect(indexModule.add(1, 1)).toBe(2);
  });
  test('adding null and a number works', () => {
    expect(indexModule.add(null, 1)).toBe(1);
  });
  test('adding nothing returns NaN', () => {
    expect(indexModule.add()).toEqual(NaN);
  });
});

describe('#### 2', () => {
  test('Testing auto mocking', done => {
    expect(throws(1)).toBe(1);
    done();
  });
});

describe('#### 3', () => {
  const addSpy = jest.spyOn(indexModule, 'add');
  test('calls add 3 times if looping 4 times', () => {
    indexModule.loop(4);
    expect(addSpy).toHaveBeenCalledTimes(3);
  });

});
