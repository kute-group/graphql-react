var fs = require('fs');
var zlib = require('zlib');

// var readerStream = fs.createReadStream('./background/demo.txt');

// var writerStream = fs.createWriteStream('./background/output.txt');

// readerStream.pipe(writerStream);

// console.log('done')

// fs.createReadStream('./background/demo.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./background/demo.gz'));
// console.log('done');

fs.stat('./background/demo.txt', function(err, stats) {
  if(err) return console.error('err: ', err);
  console.log('file information: ', stats);
});
console.log('done');