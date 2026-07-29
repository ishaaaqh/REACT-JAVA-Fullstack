# Day 3 Cheatsheet — Asynchronous JavaScript

## The Model
- JS = single call stack. Async work (timers, network, DOM events) is delegated to Web APIs / Node APIs.
- Completed work is queued; the **Event Loop** moves queued callbacks to the stack ONLY when the stack is empty.

## Microtasks vs Macrotasks
| Microtasks (run first, ALL of them, every loop tick) | Macrotasks (one per tick) |
|---|---|
| `Promise.then/catch/finally` | `setTimeout` / `setInterval` |
| `queueMicrotask()` | `setImmediate` (Node) |
| `MutationObserver` | I/O callbacks, UI rendering |

**Golden rule:** Sync code → all microtasks → one macrotask → repeat.

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
// Output: 1, 4, 3, 2
```

## Promises
- 3 states: **Pending → Fulfilled | Rejected** (settles once, immutable after)
- `.then()` always returns a NEW promise → enables chaining
- `.catch()` = sugar for `.then(null, onRejected)`
- `.finally()` runs regardless of outcome, no args passed

## Combinators
| Method | Resolves when | Rejects when |
|---|---|---|
| `Promise.all` | All resolve | First rejection (fails fast) |
| `Promise.allSettled` | All settle (any outcome) | Never — always resolves |
| `Promise.race` | First settles (win or lose) | First settles as rejection |
| `Promise.any` | First fulfillment | All reject (AggregateError) |

## Async/Await
```js
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) { console.error(err); }
}
```
- `async` function ALWAYS returns a Promise
- `await` pauses that function only (not the whole program)
- Sequential `await`s = slow for independent calls → use `Promise.all` for parallelism

## Rapid-Fire Q&A
- **Q: Why doesn't `setTimeout(fn, 0)` run instantly?** It still must wait for the call stack to clear AND for any pending microtasks to drain first.
- **Q: `Promise.all` vs `Promise.allSettled`?** `all` fails fast on first rejection; `allSettled` always waits for everyone and reports per-item status.
- **Q: Does `await` block the whole JS thread?** No — only pauses the async function; other code keeps running via the event loop.
