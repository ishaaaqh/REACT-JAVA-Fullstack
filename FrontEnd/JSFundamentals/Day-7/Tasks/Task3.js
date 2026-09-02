// Build a Function Using Rest + Spread (15 min)
// Write `mergeUnique(...arrays)` that takes any number of arrays and returns a single array of unique values, using rest params, spread, and `Set`.

// ```js
// mergeUnique([1,2], [2,3], [3,4]); // [1,2,3,4]
// 
mergeUnique(['a', 'b'], ['b', 'c'], ['c', 'd']); // ['a', 'b', 'c', 'd']

const mergeUnique = (...arrays) => {
  const uniqueValues = new Set();
  arrays.forEach(arr => {
    arr.forEach(value => uniqueValues.add(value));
  });
  return [...uniqueValues];
};

console.log(mergeUnique([1, 2], [2, 3], [3, 4])); // [1, 2, 3, 4]
console.log(mergeUnique(['a', 'b'], ['b', 'c'], ['c', 'd'])); // ['a', 'b', 'c', 'd']
