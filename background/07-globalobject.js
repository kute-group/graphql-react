
console.log(__dirname);

console.log(__filename);

const t = setTimeout(() => {
  console.log('hello every body');
}, 3000);

console.log(t);
let a =0;
setInterval(() => {
  a++;
  console.log(a);
  console.log(' hello repeat');
}, 1000)
