import * as indexModule from './index';
//import {loop, add} from './index'

describe('Add tests', () => {
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


describe('Loop tests', () => {
  const addSpy = jest.spyOn(indexModule, 'add');
  test('calls add 3 times if looping 4 times', () => {
    indexModule.loop(4);
    expect(addSpy).toHaveBeenCalledTimes(3);
  });

});