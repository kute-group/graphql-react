const _ = require('lodash');
const ver = _.VERSION;
console.log('ver', ver);

// random number
console.log('random(10)', _.random(10));
console.log('random(10, 30)', _.random(10, 30));

// executes n times
_.times(4, () => {
  console.log('I am Steve Luong \n');
});

// create a range of values
console.log('_.range(5)', _.range(5));
console.log('_.range(5, 200, 15)', _.range(5, 200, 15));

// filrer array
const list = [1, 2, 3, 4, 5, 5, 6, 2];
const list_filted = _.filter(list, e => {
  if (e > 2) return e;
});

console.log('Array after filter that each element greater than 2', list_filted);
