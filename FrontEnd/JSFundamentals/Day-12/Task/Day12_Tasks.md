# Day 7 — Hands-On Tasks: Interview Deep-Dive

**Time estimate:** ~2 hours (this is your consolidation + mock-interview day)

## Part 1 — Output-Based Rapid Fire (20 min)
Write down the output for each WITHOUT running it first, then verify and correct any wrong predictions:

```js
console.log([1,2,3] + [4,5,6]);
console.log(typeof null);
console.log(typeof typeof 1);
console.log(1 == '1');
console.log(1 === '1');
console.log(null == undefined);
console.log(null === undefined);
console.log([1,2,3].length = 1);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

let a = { valueOf: () => 1 };
console.log(a + 1);

console.log([..."hello"]);
console.log(Array.isArray([]));
```

## Part 2 — Live-Code the Core Polyfills (45 min)
Implement each from memory (don't peek at Day 7 slides until you've tried):
1. `Function.prototype.myBind`
2. `Function.prototype.myCall`
3. `Function.prototype.myApply`
4. `Promise.myAll`
5. `Array.prototype.myMap`

## Part 3 — Design Pattern Mini-Build (30 min)
Pick TWO of the following and implement a minimal working version:
- **Module pattern**: an IIFE-based counter module with private state
- **Singleton**: a `Logger` class where `new Logger()` always returns the same instance
- **Observer/PubSub**: an `EventEmitter` with `on(event, cb)`, `off(event, cb)`, and `emit(event, ...args)`

## Part 4 — Mock Interview Self-Test (25 min)
Set a timer for 25 minutes. Without looking at any of the week's material, answer out loud (or in writing) as if in an interview:
1. Explain closures and give a real use case.
2. Explain the event loop and why `setTimeout(fn, 0)` doesn't run first.
3. Explain the prototype chain and what `new` does step by step.
4. What's the difference between `Promise.all` and `Promise.allSettled`?
5. Write `debounce` from scratch on paper/whiteboard.
6. Explain the difference between `==` and `===` with coercion examples.

Grade yourself honestly — flag anything shaky and revisit that day's cheatsheet tonight.

## Self-Check Questions
1. Why does `[] + []` produce an empty string but `[] + {}` produces `'[object Object]'`?
2. What's the key implementation detail that makes `bind` different from `call`/`apply`?
3. Why must a Singleton's constructor check for an existing instance before creating a new one?
4. In a PubSub implementation, why is it important to support `off()` (unsubscribing)?
5. Which of the 7 days' topics do you feel least confident about? Write a 2-line plan to revisit it.
