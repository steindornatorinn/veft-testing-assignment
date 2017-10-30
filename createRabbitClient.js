import amqplib from 'amqplib';

// Creates a rabbitmq client
export default () => 
  new Promise((resolve, reject) => {
    amqplib
      .connect("amqp://localhost")
      .then(conn => conn.createChannel())
      .then(ch => resolve(ch))
  });