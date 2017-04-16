const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/Users/apple']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


const execFile = require('child_process').execFile;
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log('stdout', stdout);
});
const child_process = require('child_process');
console.log('child_process', child_process.execFile);
