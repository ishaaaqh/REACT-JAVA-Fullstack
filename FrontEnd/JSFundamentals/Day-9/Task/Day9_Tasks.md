# Day 4 — Hands-On Tasks: ES6+ Advanced Features

**Time estimate:** ~90-100 min practice

## Warm-up: Predict the Output (10 min)
```js
class Base {
  greet() { return 'Base greet'; }
}
class Child extends Base {
  greet() { return super.greet() + ' + Child greet'; }
}
console.log(new Child().greet());

const s1 = Symbol('x');
const s2 = Symbol('x');
console.log(s1 === s2);

const m = new Map();
m.set({}, 'a').set({}, 'b');
console.log(m.size);
```

## Task 1 — Build a Class Hierarchy (20 min)
Create a `Shape` base class with a private field for a name, a `area()` method that throws "not implemented," and a `describe()` method. Create `Circle` and `Rectangle` subclasses that override `area()`. Add a `static` factory method `Shape.create(type, ...args)`.

## Task 2 — Write a Custom Iterable (20 min)
Implement a `Range` class that is iterable via `for...of`, using `Symbol.iterator`:

```js
const r = new Range(1, 5);
for (const n of r) console.log(n); // 1 2 3 4 5
[...r]; // [1,2,3,4,5]
```

## Task 3 — Generators for Lazy Sequences (20 min)
Write a generator function `infiniteSequence()` that yields an infinite sequence of numbers starting from 0, then write a helper `take(generator, n)` that pulls only the first `n` values without ever running the infinite loop to completion.

## Task 4 — Use Map/Set/WeakMap Appropriately (15 min)
1. Use a `Set` to deduplicate an array of objects by a specific key (hint: track seen keys in a regular Set)
2. Use a `Map` to count word frequency in a sentence
3. Use a `WeakMap` to attach private metadata to DOM-like objects without causing memory leaks — explain in a comment why WeakMap is correct here over Map

## Task 5 — Mini Module System (15 min)
Create two files: `utils.js` (with a named export `capitalize` and a default export `formatDate`) and `main.js` that imports both. If you don't have a bundler handy, simulate this with Node's ES modules (`"type": "module"` in package.json) or explain the import/export lines in comments.

## Self-Check Questions
1. Why aren't classes hoisted the same way function declarations are?
2. What's the real difference between a generator function and a regular function?
3. When would you reach for a `WeakSet` instead of a `Set`?
4. What problem do Symbols solve that regular string keys can't?
5. Why are ES modules described as having "live bindings" — what does that mean in practice?
