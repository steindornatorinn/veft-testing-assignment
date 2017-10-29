import createRabbitClient from './createRabbitClient';

const topic = 'consumer';
createRabbitClient().then(ch =>
  ch.assertQueue(topic).then(ok => {
    return ch.consume(topic, msg => {
      if(msg !== null){
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  })
);