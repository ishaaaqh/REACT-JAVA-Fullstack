# Day 5 — Hands-On Tasks: Prototypes & OOP

**Time estimate:** ~90 min practice

## Warm-up: Predict the Output (10 min)
```js
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return this.name + ' makes a sound'; };
const dog = new Animal('Dog');
console.log(dog.speak());
console.log(dog.hasOwnProperty('speak'));
console.log(dog.hasOwnProperty('name'));
console.log(Object.getPrototypeOf(dog) === Animal.prototype);

const frozen = Object.freeze({ a: 1, nested: { b: 2 } });
frozen.a = 99;
frozen.nested.b = 99;
console.log(frozen.a, frozen.nested.b);
```

## Task 1 — Implement Inheritance WITHOUT `class` (20 min)
Using only prototypes and constructor functions (no ES6 `class`), implement `Vehicle` and `Car extends Vehicle` manually:
```js
function Vehicle(make) { this.make = make; }
Vehicle.prototype.info = function() { return 'Make: ' + this.make; };
// implement Car so Car.prototype chains to Vehicle.prototype
// and fix Car.prototype.constructor afterward
```
Then rewrite the same thing using `class`/`extends` and compare.

## Task 2 — Build Your Own `new` (20 min)
Implement `myNew(Constructor, ...args)` that replicates what the `new` keyword does internally (create object, link prototype, call constructor, handle explicit object return).

## Task 3 — Prototype Chain Explorer (15 min)
Write a function `getPrototypeChain(obj)` that returns an array of all prototypes in an object's chain, ending with `null`. Test it on a plain object, an array, and a custom class instance.

## Task 4 — Object Method Practice (20 min)
1. Write a function `deepFreeze(obj)` that recursively freezes nested objects (fixing the shallow-freeze gotcha from the warm-up)
2. Use `Object.entries` + `reduce` to invert a key-value object (`{a:1,b:2}` → `{1:'a',2:'b'}`)
3. Compare `Object.freeze` vs `Object.seal` with a code example showing the difference in behavior

## Task 5 — Mixins (15 min)
Implement a simple mixin pattern: write `Serializable` and `Comparable` mixin objects with methods, and a function `applyMixins(TargetClass, ...mixins)` that copies mixin methods onto the target's prototype.

## Self-Check Questions
1. What's the exact difference between `__proto__` and `.prototype`?
2. Why does `Object.freeze` fail to protect nested objects?
3. What are the 4 steps the `new` keyword performs?
4. Give one advantage of prototype-based inheritance (delegation) over classical class-based inheritance.
5. How would you check if a property is inherited vs. the object's own?
