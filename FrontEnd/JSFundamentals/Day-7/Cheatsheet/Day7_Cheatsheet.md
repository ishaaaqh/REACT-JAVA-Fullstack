# Day 2 Cheatsheet — ES6 Core Features

## let / const vs var
- `const` = binding cannot be reassigned; object/array CONTENTS can still mutate
- `let`/`const` are block-scoped; `var` is function-scoped
- Default rule: `const` unless reassignment needed → `let`; avoid `var`

## Arrow Functions
```js
const fn = (a, b) => a + b;      // implicit return
const fn2 = (a) => { return a; } // explicit return needs braces
```
- No own `this` (lexical), no `arguments` object, no `prototype`, cannot be used with `new`
- Best for: callbacks, array methods — NOT for object methods needing dynamic `this`

## Template Literals
```js
`Hello ${name}`               // interpolation
`line1
line2`                        // native multi-line
tag`text ${value} more`       // tagged template — fn(strings, ...values)
```

## Destructuring
```js
const [a, b, ...rest] = arr;               // array
const { x, y: renamed, z = 10 } = obj;     // object, rename, default
function f({ id, name }) {}                // in params
[a, b] = [b, a];                            // swap
```

## Spread vs Rest (same `...` syntax, opposite direction)
| | Spread | Rest |
|---|---|---|
| Direction | Expands | Collects |
| Where | Array/object literals, function calls | Function params, destructuring |
| Example | `[...arr1, ...arr2]` | `function f(...args) {}` |
| Gotcha | Shallow copy only | Must be LAST parameter |

## Default Parameters
```js
function greet(name = 'Guest', msg = `Hi ${name}`) {}
```
- Evaluated at call time; can reference earlier parameters

## Rapid-Fire Q&A
- **Q: Does `const arr = [1,2]; arr.push(3)` throw?** No — array contents aren't frozen, only the binding.
- **Q: Is spread a deep or shallow copy?** Shallow — nested objects/arrays are still shared references.
- **Q: Can rest come before other params?** No — `function f(...rest, last)` is a SyntaxError.
- **Q: What's `strings.raw` in a tagged template?** The literal, unescaped string segments (before substitution).
