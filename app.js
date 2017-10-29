import express from 'express';
//import mongoose, {Schema} from 'mongoose';
//import employeeSchema from './index';
import app from './app';
import bodyParser from 'body-parser';
app.use(bodyParser.json());

export default mq =>{
  // Something needs to happen with the MQ here
  const app = express();
  app.post()
  return app;
}