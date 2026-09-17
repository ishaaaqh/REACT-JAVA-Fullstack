// Build a Promise from Scratch (20 min)
// Write a function `wait(ms)` that returns a Promise resolving after `ms` milliseconds, then chain three sequential `wait` calls with `.then()`, logging a message after each.

const wait = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

wait(1000)
  .then(() => {
    console.log('First wait finished');
    return wait(1000);
  })
  .then(() => {
    console.log('Second wait finished');
    return wait(1000);
  })
  .then(() => {
    console.log('Third wait finished');
  });