const path = require('path');

const currentFile = path.join('/index.js');

console.log('In: ', __dirname);
console.log('Running: ', currentFile);

console.log(process.argv);
