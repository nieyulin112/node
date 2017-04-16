const d = require('domain').create();
PORT = '8080'
d.on('error', (er) => {
    console.log(`error, but oh well ${er.message}`);
});
d.run(() => {
    require('http').createServer((req, res) => {
        console.log('req', req);
        console.log('res', res);
    }).listen(PORT);
});
