// process的学习
process.on('exit', (code) => {
    setInterval(() => {
        console.log('This will not run');
    }, 1000);
});
