const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('fire', (...arg) => console.log(`${arg} has been fired.`));

setTimeout(() => emitter.emit('fire', 'Arg1', 'Arg2', 'Arg3'), 2000)