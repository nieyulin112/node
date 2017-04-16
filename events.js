const EventEmitter = require('events');
const ee = new EventEmitter();
setImmediate(() => {
    console.log('ee', ee);
});
