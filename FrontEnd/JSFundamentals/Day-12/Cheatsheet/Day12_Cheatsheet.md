# Day 7 Cheatsheet — Interview Deep-Dive

## Coercion Puzzles — Quick Reference
```js
[] + []            // ''            (both toString to '')
[] + {}            // '[object Object]'
typeof NaN          // 'number'
typeof null         // 'object'     (long-standing JS bug)
1 == '1'            // true         (coercion)
1 === '1'           // false        (no coercion)
null == undefined    // true
null === undefined   // false
NaN === NaN         // false        (NaN never equals itself)
Object.is(NaN, NaN) // true         (Object.is fixes this edge case)
0.1 + 0.2           // 0.30000000000000004 (floating point precision)
1 < 2 < 3           // true         (1<2 → true=1, then 1<3 → true)
3 > 2 > 1           // false        (3>2 → true=1, then 1>1 → false)
```

## bind / call / apply Polyfills (structure to remember)
```js
Function.prototype.myBind = function(ctx, ...args) {
  const fn = this;
  return function(...more) { return fn.apply(ctx, [...args, ...more]); };
};
// call: invoke immediately, args listed individually
// apply: invoke immediately, args as an array
// bind: returns a new function, does NOT invoke immediately
```

## Promise.all Polyfill (structure)
```js
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [], completed = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p).then(val => {
        results[i] = val;
        if (++completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
```

## Design Patterns Quick Reference
| Pattern | Core Idea | Common Use |
|---|---|---|
| Module | IIFE returning object; closures hide private state | Predecessor to ES modules |
| Singleton | Ensure only one instance ever exists | Config objects, DB connections, caches |
| Observer/PubSub | Subject notifies subscribed observers | Event emitters, React state, UI events |

## Final Revision Checklist
- [ ] Execution context, call stack, hoisting, TDZ
- [ ] Scope chain, closures, `this` in all contexts
- [ ] Event loop, microtasks vs macrotasks
- [ ] Promise states & all 4 combinators
- [ ] Prototype chain, what `new` does, class inheritance
- [ ] Generators, iterators, Symbols, Map/Set/WeakMap/WeakSet
- [ ] HOFs, currying, debounce/throttle, memory leaks
- [ ] Coercion rules & common output puzzles
- [ ] bind/call/apply and Promise.all polyfills from memory
- [ ] Module, Singleton, Observer patterns

## Rapid-Fire Q&A
- **Q: Why does `[] + {}` give `'[object Object]'` but `{} + []` in a statement context can log `0`?** Because at the START of a statement, `{}` is parsed as a code block, not an object literal — `+[]` alone coerces to `0`.
- **Q: What's the core difference between `call` and `bind`?** `call` invokes immediately; `bind` returns a new function for later invocation.
- **Q: Why must a Singleton check for an existing instance in its constructor?** To guarantee only one instance ever exists — the check-and-return pattern enforces that guarantee.
