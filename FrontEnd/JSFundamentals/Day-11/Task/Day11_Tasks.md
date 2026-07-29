# Day 6 — Hands-On Tasks: Functional JS & Memory

**Time estimate:** ~100 min practice

## Warm-up: Predict the Output (10 min)
```js
const nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 2).filter(n => n > 4).reduce((a, b) => a + b));

function makeAdder(x) {
  return function(y) { return x + y; };
}
const add5 = makeAdder(5);
console.log(add5(3));
```

## Task 1 — Implement map/filter/reduce from Scratch (20 min)
Without using the built-ins, implement `myMap`, `myFilter`, and `myReduce` as functions that operate on arrays (not prototype extensions is fine too). Test each against the real Array methods for the same input.

## Task 2 — Write a Curry Function (20 min)
Implement a generic `curry(fn)` that works for any function arity:
```js
function curry(fn) { /* ... */ }
const sum3 = curry((a, b, c) => a + b + c);
sum3(1)(2)(3);   // 6
sum3(1, 2)(3);   // 6
sum3(1)(2, 3);   // 6
sum3(1, 2, 3);   // 6
```

## Task 3 — Implement Debounce and Throttle (20 min)
Write both `debounce(fn, delay)` and `throttle(fn, limit)` from scratch (don't just copy the slide — type it out yourself). Test with a simulated rapid-fire event using a loop of `setTimeout` calls at random small intervals, logging when the wrapped function actually executes.

## Task 4 — Pure vs Impure Refactor (15 min)
Given this impure function, refactor it into a pure function that doesn't mutate its input:
```js
function addItem(cart, item) {
  cart.items.push(item);
  cart.total += item.price;
  return cart;
}
```

## Task 5 — Find and Fix a Memory Leak (15 min)
Given this component-like pattern, identify the memory leak and fix it:
```js
function setupWidget() {
  const data = new Array(1000000).fill('leak');
  document.getElementById('btn').addEventListener('click', function() {
    console.log(data.length);
  });
}
// called repeatedly without cleanup — what's wrong, and how do you fix it?
```

## Self-Check Questions
1. Why is `reduce` considered the most powerful/general of the three array HOFs?
2. What's the practical difference between currying and simple partial application?
3. Give one real UI scenario where throttle is clearly better than debounce, and vice versa.
4. Why doesn't JavaScript's garbage collector use simple reference counting?
5. Name two ways closures can accidentally cause a memory leak in long-running applications.
