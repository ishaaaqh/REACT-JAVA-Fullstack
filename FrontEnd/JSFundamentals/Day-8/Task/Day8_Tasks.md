# Day 3 — Hands-On Tasks: Asynchronous JavaScript

**Time estimate:** ~90-100 min practice

## Warm-up: Predict the Execution Order (15 min)
Write down the exact output order BEFORE running:

```js
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

async function foo() {
  console.log('D');
  await null;
  console.log('E');
}
foo();

console.log('F');

queueMicrotask(() => console.log('G'));
```

## Task 1 — Build a Promise from Scratch (20 min)
Write a function `wait(ms)` that returns a Promise resolving after `ms` milliseconds, then chain three sequential `wait` calls with `.then()`, logging a message after each.

## Task 2 — Convert Callback to Promise (15 min)
Given a callback-style function, wrap it in a Promise ("promisify" it):

```js
function getUserCallback(id, callback) {
  setTimeout(() => {
    if (id > 0) callback(null, { id, name: 'User' + id });
    else callback(new Error('Invalid id'));
  }, 100);
}
// Write: function getUserPromise(id) { ... }
```

## Task 3 — Rewrite with Async/Await (15 min)
Rewrite your Task 2 usage with `async/await` and proper `try/catch` error handling. Test both a success case and a failure case (id = -1).

## Task 4 — Promise Combinators in Practice (20 min)
You have three async functions simulating API calls with different delays: `fetchUser()`, `fetchPosts()`, `fetchComments()` (some should randomly reject to test error handling).
1. Use `Promise.all` to fetch all three in parallel — log total time taken
2. Use `Promise.allSettled` and log which succeeded/failed
3. Use `Promise.race` with a `timeout(2000)` promise to implement a fetch timeout pattern

## Task 5 — Sequential vs Parallel Timing (10 min)
Write two versions of a function that calls `wait(1000)` three times:
- Version A: using sequential `await` (should take ~3000ms)
- Version B: using `Promise.all` (should take ~1000ms)

Time both with `console.time`/`console.timeEnd` and explain the difference in one sentence.

## Self-Check Questions
1. Why does `setTimeout(fn, 0)` NOT run immediately?
2. Name three things that go into the microtask queue and two into the macrotask queue.
3. What does `await` actually do to the surrounding async function's execution?
4. When would you choose `Promise.any` over `Promise.race`?
5. Why can chaining `.then()` calls sequentially be a performance problem, and how do you fix it for independent async calls?
