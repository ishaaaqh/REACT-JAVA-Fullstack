# Day 4 Cheatsheet — ES6+ Advanced Features

## Classes
```js
class Animal {
  #secret = 'hidden';           // private field
  constructor(name) { this.name = name; }
  speak() { return `${this.name} sound`; }
  static create(name) { return new Animal(name); }
}
class Dog extends Animal {
  speak() { return `${super.speak()}: Woof`; }
}
```
- Sugar over prototype-based inheritance; NOT hoisted (TDZ)
- `super()` calls parent constructor; `static` = belongs to class, not instance
- `#field` = true private (ES2022), inaccessible outside the class

## Modules
```js
export const PI = 3.14;              // named export
export default function add() {}     // default export (one per module)
import add, { PI } from './math.js';
```
- Modules are **singletons** — evaluated once, cached, shared state across all importers
- Imports are **live bindings** (reflect later changes to the export)
- Strict mode + async loading by default (unlike CommonJS `require`)

## Iterators & Generators
```js
function* gen() {
  yield 1;
  yield 2;
  return 3;
}
const it = gen();
it.next(); // { value: 1, done: false }
```
- Iterator protocol: object with `.next()` → `{ value, done }`
- Iterable protocol: has `[Symbol.iterator]` → enables `for...of`, spread
- Generators pause/resume with `yield` — foundation for lazy sequences and (historically) async/await

## Symbols
```js
const id = Symbol('id');           // always unique, even with same description
obj[id] = 123;                     // hidden from for...in, JSON.stringify
class X { [Symbol.iterator]() {} } // hooks into language behavior
```

## Map / Set / WeakMap / WeakSet
| | Keys/Values | Iterable? | GC-friendly? |
|---|---|---|---|
| `Map` | Any type key | Yes | No |
| `Set` | Unique values, any type | Yes | No |
| `WeakMap` | Object keys only | No | Yes (weak refs) |
| `WeakSet` | Objects only | No | Yes (weak refs) |

- Dedupe array: `[...new Set(arr)]`
- WeakMap/WeakSet: use for private metadata / membership tracking without leaking memory

## Rapid-Fire Q&A
- **Q: Why use WeakMap instead of Map for private data?** WeakMap doesn't prevent garbage collection of its keys — no memory leak risk.
- **Q: Are two `Symbol('x')` calls equal?** No — every Symbol is unique regardless of description.
- **Q: What's the practical benefit of "live bindings" in ES modules?** If the exporting module updates a value later, importers see the updated value automatically.
