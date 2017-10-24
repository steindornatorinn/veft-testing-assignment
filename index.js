import express from 'express';
import mongoose, {Schema} from 'mongoose';
import errorFunction from './errorFunction';

/* DO NOT REFACTOR THIS CODE */
export const add = (a, b) => a + b;

export const throws = n => {
  errorFunction();
  return n;
};

export const loop = n => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += add(n, n - 1);
  }
  return sum;
};
/* DO NOT REFACTOR THIS CODE */

/* SERVER CODE TO REFACTOR */
mongoose.Promise = global.Promise;
export const employeeSchema = Schema({
  name: String,
  jobTitles: {type: [String]},
});

mongoose
  .connect('mongodb://localhost:27017/veft-testing', {
    useMongoClient: true,
  })
  .then(db => {
    const server = app(db);
    server.listen(27017, () => console.log('Server running on port 27017'));
  });
/* SERVER CODE TO REFACTOR */
