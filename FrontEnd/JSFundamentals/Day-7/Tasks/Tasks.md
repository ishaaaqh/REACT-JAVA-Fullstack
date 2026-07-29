# Day 2 — Hands-On Tasks: ES6 Core Features

**Time estimate:** ~90 min practice

## Warm-up: Predict the Output (10 min)
```js
// 1
const obj = { a: 1 };
obj.a = 2;
console.log(obj.a);
obj = { a: 3 }; // ??

// 2
const arr = [1, [2, 3], { x: 4 }];
const copy = [...arr];
copy[1].push(99);
console.log(arr[1]); // ??

// 3
function greet(name = 'Guest', greeting = `Hello, ${name}`) {
  console.log(greeting);
}
greet();
```

## Task 1 — Refactor to ES6 (20 min)
Take this ES5 code and rewrite it using arrow functions, template literals, and const/let:

```js
var user = { name: 'Ravi', age: 28 };
function describe(u) {
  return 'Name: ' + u.name + ', Age: ' + u.age;
}
var greetAll = function(users) {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    result.push(describe(users[i]));
  }
  return result;
};
```

## Task 2 — Destructuring Practice (20 min)
Solve each using destructuring only (no manual indexing):
1. Swap two variables `a` and `b` without a temp variable
2. Extract `id` and `email` from a deeply nested API response: `{ user: { profile: { id, email } } }`
3. Write a function `formatAddress({ street, city, country = 'India' })` with a default
4. Extract the first item and "the rest" from an array of scores

## Task 3 — Build a Function Using Rest + Spread (15 min)
Write `mergeUnique(...arrays)` that takes any number of arrays and returns a single array of unique values, using rest params, spread, and `Set`.

```js
mergeUnique([1,2], [2,3], [3,4]); // [1,2,3,4]
```

## Task 4 — Tagged Template Function (15 min)
Write a tagged template function `highlight` that wraps interpolated values in `**double asterisks**` while leaving the surrounding text unchanged.

```js
const name = 'Priya';
highlight`Hello, ${name}, welcome!`;
// "Hello, **Priya**, welcome!"
```

## Task 5 — Immutable State Update Pattern (10 min)
Given a state object `{ user: { name: 'A', age: 20 }, theme: 'dark' }`, write a function `updateAge(state, newAge)` that returns a NEW state object with only `age` updated, using spread — without mutating the original.

## Self-Check Questions
1. Why does reassigning a `const` object throw an error, but mutating its properties doesn't?
2. What's the difference between spread and rest — they use the same `...` syntax?
3. When does an arrow function make a BAD choice for an object method? Why?
4. What happens if you put a rest parameter before other parameters?
5. Are template literal interpolations evaluated once or can they be re-evaluated?
