
import {add, throws} from './index';
import errorFunction from './errorFunction';
import * as indexModule from './index';
import mongo from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from './app'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
jest.mock('./errorFunction');
errorFunction.mockImplementation(() => 'errorFunction');

let mongoServer;
let server;

mongoose.Promise = global.Promise;

beforeAll(() => {
  mongoServer = new mongo();
  mongoServer.getConnectionString().then(mongoUri =>{
    mongoose
      .connect(mongoUri, {
         useMongoClient: true,
    }).then(db => {
      server = app(db);
      resolve();
    });
  });
});

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
