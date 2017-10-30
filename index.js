import express from 'express';
//import mongoose, {Schema} from 'mongoose';
//import errorFunction from './errorFunction';
import app from './app';
import createProducer from './producer';

// Creates two producers
// We should probably rename these channels doe
const userProducer = createProducer('consumer');
const punchProducer = createProducer('punchProducer');

/* DO NOT REFACTOR THIS CODE */
/*export const add = (a, b) => a + b;

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
};*/
/* DO NOT REFACTOR THIS CODE */

/* SERVER CODE TO REFACTOR */

// Skipta tessu ut fyrir rabbitmq
/*mongoose.Promise = global.Promise;
export const employeeSchema = Schema({
  name: String,
  jobTitles: {type: [String]},
});*/

//skipta tessu lika ut fyrir rabbit mq, sleppa mongo alveg
/*mongoose
  .connect('mongodb://localhost:27017/veft-testing', {
    useMongoClient: true,
}
  .then(db => {
    */

// Creates a app if the channels were successfully created
Promise.all([userProducer, punchProducer])
  .then(([userMq, punchMq]) => {
    const server = app(userMq, punchMq);
    server.listen(27017, () => console.log('Server running on port 27017'));
});