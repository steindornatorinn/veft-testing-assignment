import express from 'express';
import mongoose, {Schema} from 'mongoose';
import employeeSchema from './index';
import app from './app';

export default db =>{
  /*const employeeSchema = Schema({
    name: String,
    jobTitles: {type: [String]},
  });
  const Employee = db.model('Employee', employeeSchema);*/
  const app = express();
  app.get('/', (req, res) => {
    Employee.find({}).exec((err, data) => res.json({data}));
  });
  return app;
}