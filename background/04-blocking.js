var fs = require('fs');

var data = fs.readFileSync('./background/demo.txt');
console.log('data', data.toString());
console.log('========end=======');

fs.readFile('./background/demo2.txt', function(err, dt){
  if(err) console.log('err: ', err);
  console.log('data 2 : ',dt.toString());
});

console.log('========end2=======');
console.log('========end2=======');
console.log('========end2=======');