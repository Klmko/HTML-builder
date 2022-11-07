const fs = require('fs');
const process = require('process');

console.log('Please type something here (press Ctrl+C to finish):');

const file = fs.createWriteStream('02-write-file\\result.txt');

process.stdin.setEncoding('utf-8');
process.stdin.pipe(file);

process.stdin.on('data', (chunk) => {
  if (chunk.match(/^exit\r?\n?/)) {
    console.log('Well done, bye');
    process.exit();
  }
});

process.on('SIGINT', () => {
  console.log('Well done, bye');
  process.exit();
});

