import createRabbitClient from './createRabbitClient';

// A functinon that creates a producer that produces for the cannel that is passed to it
export default topic =>
  new Promise((resolve, reject) => {
    createRabbitClient().then(ch => {
      ch.assertQueue(topic).then(ok => { 
        resolve(ch);
      });
    });
});
