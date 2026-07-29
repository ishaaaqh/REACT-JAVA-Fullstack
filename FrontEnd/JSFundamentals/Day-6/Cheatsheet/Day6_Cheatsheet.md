# Day 1 Cheatsheet — JS Fundamentals

## Execution Context
- **Creation phase**: hoist `var` (→ `undefined`), hoist function declarations (full body), set up `this`, create scope chain
- **Execution phase**: code runs top to bottom, real values assigned
- **Call Stack**: LIFO; Global EC pushed first; each function call pushes a new EC, pops on return

## Hoisting
| Declaration | Hoisted? | Initial value | Scope |
|---|---|---|---|
| `var` | Yes | `undefined` | Function |
| `let`/`const` | Yes (TDZ) | Uninitialized (throws) | Block |
| `function` | Yes | Full function | Function |
| `function expr` | Only the `var` part | `undefined` | Depends |

**TDZ (Temporal Dead Zone):** time between entering scope and the `let`/`const` line — accessing throws `ReferenceError`.

## Scope Chain
- **Lexical scoping**: determined by WHERE code is physically written, not where it's called from
- Lookup order: current scope → outer scope(s) → global → (ReferenceError if not found)

## Closures
> A function bundled with references to its surrounding (lexical) state.

- Persists variables after outer function returns
- Uses: private state, memoization, currying, module pattern, event handler data
- **Loop gotcha**: `var` in a loop shares one binding across all callbacks → use `let` (per-iteration binding) or an IIFE

## `this` — Quick Rules
| Call type | `this` value |
|---|---|
| Global (non-strict) | global object (`window`) |
| Global (strict) | `undefined` |
| `obj.method()` | `obj` |
| Regular function call | `undefined` (strict) / global (non-strict) |
| Arrow function | Lexical — inherited from enclosing scope, never its own |
| `new Fn()` | The newly created object |
| `fn.call(ctx)` / `fn.apply(ctx)` | `ctx`, invoked immediately |
| `fn.bind(ctx)` | Returns new fn permanently bound to `ctx` |

## Rapid-Fire Q&A
- **Q: Why is `let x; console.log(x)` fine but referencing `x` before the `let` line isn't?**
  A: Once past the declaration line, it's initialized (to `undefined` if no value given); TDZ only covers before that line.
- **Q: Does `bind` invoke the function?** No — it returns a new function; `call`/`apply` invoke immediately.
- **Q: Arrow function as object method — good idea?** No — it won't get `this` = the object; it captures the outer (often global/module) scope.
