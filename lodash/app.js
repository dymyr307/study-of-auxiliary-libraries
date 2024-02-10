let arr = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(arr);

let pair = _.fromPairs([
  ['a', 1],
  ['b', 2],
]);
console.log(pair);

let basket = {
  broad: 4,
  milk: 6,
  potato: 20,
};

let moreFive = _.pickBy(basket, (val) => _.gte(val, 5));

console.log(moreFive);
