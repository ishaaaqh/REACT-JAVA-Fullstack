# Day 6 Cheatsheet — Functional JS & Memory

## Higher-Order Functions (HOFs)
- A function that takes a function as an argument, returns one, or both
- `map` / `filter` / `reduce` / `forEach` are all HOFs
- `reduce` is the most general — `map` and `filter` can both be implemented with it

## Pure Functions & Immutability
- **Pure** = same input → same output, always; no side effects (no mutation, no I/O)
- `const` does NOT guarantee immutability — only prevents reassignment
- Use spread/`map`/`filter` to create new arrays/objects instead of mutating

## Currying
```js
const curry = fn => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...more) => curry(fn)(...args, ...more);

const add3 = curry((a, b, c) => a + b + c);
add3(1)(2)(3);   // 6
add3(1, 2)(3);   // 6
```
- Transforms `f(a,b,c)` into `f(a)(b)(c)`
- Partial application = pre-filling SOME args and returning a fn for the rest

## Debounce vs Throttle
```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let wait = false;
  return (...args) => {
    if (wait) return;
    fn(...args);
    wait = true;
    setTimeout(() => wait = false, limit);
  };
}
```
| | Debounce | Throttle |
|---|---|---|
| Behavior | Waits for a pause in events | Runs at most once per interval |
| Use case | Search-as-you-type, resize-end | Scroll tracking, button-spam prevention |

## Memory Leaks & Garbage Collection
- GC uses **mark-and-sweep**: anything unreachable from GC roots is collected (handles reference cycles, unlike naive ref-counting)
- Common leak sources:
  - Uncleared `setInterval`/event listeners
  - Accidental globals (missing `let`/`const` in non-strict code)
  - Detached DOM nodes still referenced in JS variables
  - Long-lived closures retaining large objects unnecessarily

## Rapid-Fire Q&A
- **Q: Why does JS use mark-and-sweep instead of reference counting?** Reference counting fails on circular references (two objects referencing each other but unreachable from roots) — mark-and-sweep handles this correctly.
- **Q: Debounce or throttle for a "save draft" auto-save feature?** Debounce — you want to wait until the user pauses typing.
- **Q: What's the #1 red flag for a closure-based memory leak?** A closure capturing a large object/array that's never released because the closure itself is never released (e.g., attached as an event listener with no cleanup).
