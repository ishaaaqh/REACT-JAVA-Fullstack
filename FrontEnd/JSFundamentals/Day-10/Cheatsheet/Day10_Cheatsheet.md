# Day 5 Cheatsheet — Prototypes & OOP

## Prototype Chain
- Every object has an internal `[[Prototype]]` link to another object
- Property lookup walks UP the chain until found, or reaches `null`
- Chain always ends: `obj → ... → Object.prototype → null`
- This is **delegation**, not copying — the basis of JS inheritance

## `__proto__` vs `.prototype`
| | Exists on | Purpose |
|---|---|---|
| `__proto__` | Every object INSTANCE | Actual link used in property lookups |
| `.prototype` | FUNCTIONS (constructors) | Becomes new instances' `__proto__` via `new` |

Prefer `Object.getPrototypeOf(obj)` over `obj.__proto__` directly.

## What `new Fn()` Does (4 steps)
1. Create a new empty object
2. Set its `[[Prototype]]` to `Fn.prototype`
3. Call `Fn` with `this` bound to the new object
4. Return the object (unless `Fn` explicitly returns another object)

## Inheritance Patterns
```js
// Pre-ES6
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;   // must fix manually
Parent.call(this, args);               // in Child's constructor

// ES6
class Child extends Parent {
  constructor(args) { super(args); }
}
```
Both use the SAME underlying prototype mechanism — `class` is cleaner syntax only.

## Essential Object Methods
```js
Object.keys(obj) / Object.values(obj) / Object.entries(obj)
Object.freeze(obj)     // shallow immutable — no add/edit/delete
Object.seal(obj)       // no add/delete, CAN edit existing values
Object.assign({}, a, b)  // shallow merge
Object.getPrototypeOf(obj)
obj.hasOwnProperty(key)  // true only for OWN properties, not inherited
```

**Gotcha:** `Object.freeze` is SHALLOW — nested objects inside a frozen object are still mutable. Use a recursive `deepFreeze` for full immutability.

## Rapid-Fire Q&A
- **Q: Difference between `freeze` and `seal`?** `freeze` blocks add/edit/delete; `seal` blocks add/delete but allows editing existing properties.
- **Q: Does `hasOwnProperty` check inherited properties?** No — only the object's own properties, not ones found via the prototype chain.
- **Q: Why prefer `Object.create(null)` sometimes?** Creates an object with NO prototype — no inherited methods like `toString`, useful for pure dictionaries.
