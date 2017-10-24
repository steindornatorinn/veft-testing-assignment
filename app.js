import express from 'express';
import mongoose from 'mongoose';
export default db =>{
  const Employee = db.model('Employee', employeeSchema);
  const app = express();
  app.get('/', (req, res) => {
    Employee.find({}).exec((err, data) => res.json({data}));
  });
  return app;
}