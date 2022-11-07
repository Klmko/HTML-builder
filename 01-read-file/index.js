const fs = require('fs');

const file = fs.createReadStream('01-read-file\\text.txt');
file.setEncoding('utf8');

file.on('data', (chunk) => {
  console.log(chunk);
});