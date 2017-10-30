import createRabbitClient from './createRabbitClient';

// Creates a single consumer process that listens on the channel 'consumer'
const topic = 'consumer';
createRabbitClient().then(ch => {
  ch.assertQueue(topic).then(ok => {
    return ch.consume(topic, msg => {
      if(msg !== null){
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  })
});