# Day 1 — Hands-On Tasks: JS Fundamentals

**Time estimate:** ~90 min practice (after ~90 min on the slides/theory)

## Warm-up: Predict the Output (10 min)
For each snippet, write down what you think logs BEFORE running it, then verify in a console.

```js
// 1
console.log(a);
var a = 5;

// 2
console.log(b);
let b = 5;

// 3
function foo() {
  console.log(this);
}
foo();

// 4
const obj = {
  name: 'Test',
  print: function() { console.log(this.name); },
  printArrow: () => console.log(this?.name),
};
obj.print();
obj.printArrow();
```

## Task 1 — Build a Call Stack Trace (15 min)
Write three nested functions `a()`, `b()`, `c()` where `a` calls `b`, and `b` calls `c`. Add a deliberate error inside `c()` and read the stack trace in your console/DevTools. Identify each frame and what it tells you.

## Task 2 — Hoisting Playground (15 min)
Write a file that demonstrates all three hoisting behaviors in one script:
- A `var` accessed before declaration (logs `undefined`)
- A `let` accessed before declaration (throws in TDZ)
- A function declaration called before its definition (works fine)

Add code comments explaining WHY each behaves that way.

## Task 3 — Closures: Build a Counter Factory (20 min)
Implement `createCounter()` that returns an object with `increment()`, `decrement()`, and `getValue()` methods, where the count is fully private (not accessible from outside).

```js
const counter = createCounter();
counter.increment();
counter.increment();
counter.getValue(); // 2
counter.count;      // undefined - private!
```

**Stretch:** Modify it to accept a `step` parameter, and support multiple independent counters.

## Task 4 — Fix the Loop Bug (15 min)
Given this broken code, fix it TWO different ways (once using `let`, once keeping `var` but using a closure/IIFE):

```js
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}
```

## Task 5 — 'this' Detective (15 min)
Given an object with a method that uses `this`, break it in 3 ways and then fix each using `bind`, `call`/`apply`, and an arrow function respectively.

```js
const user = {
  name: 'Asha',
  greet() { console.log(`Hi, I'm ${this.name}`); }
};
const greetFn = user.greet;
greetFn(); // broken - 'this' is lost. Fix it 3 ways.
```

## Self-Check Questions (write short answers, no code)
1. What are the two phases of an execution context?
2. Why does `let` throw a ReferenceError instead of returning `undefined` when accessed early?
3. What's the difference between scope and the scope chain?
4. Give a real-world use case for closures beyond counters.
5. Under what four rules is `this` determined in a regular function?
