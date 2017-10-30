import express from 'express';
//import mongoose, {Schema} from 'mongoose';
//import employeeSchema from './index';
import app from './app';
import bodyParser from 'body-parser';

export default (userMq, punchMq) =>{
  const app = express();
  app.use(bodyParser.json());
  // Writes garbage out when a post is successful
  app.post('/api/users', function(req, res){
    userMq.sendToQueue("consumer", new Buffer("Your favorite anime"));
    res.status(200);
  });
  return app;
}