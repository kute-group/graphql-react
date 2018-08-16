var events = require('events');

var eventEmitter = new events.EventEmitter();

var loggin = function logging(){
  console.log('logged in');
  setTimeout(() => {
    eventEmitter.emit('RECEIVED');
  }, 5000);
}

var received = function received(){
  console.log('received');
}

eventEmitter.on('RECEIVED', received);

loggin();

console.log('-----end----');