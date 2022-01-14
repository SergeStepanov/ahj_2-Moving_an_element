/* eslint-disable no-console */
import Element from './elements';

console.log('hello!');

const start = new Element();

start.addBoard();

// start.interval();

setInterval(() => {
  start.interval();
}, 1000);
