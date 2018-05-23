# some

A better `Array.prototype.some()`. Supports iterables, whitelist testing, and more.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i @lamansky/some
```

## API

The module exports a single function.

### Parameters

1. Bindable: `iter` (iterable)
2. Optional: `test` (function, array, or any): If a function is provided, iterated values will be evaluated on whether `test` returns `true` when passed the value. If an array is provided, iterated values will be evaluated on whether they are contained in the array. If some other value is provided, iterated values will be evaluated on whether they strictly equal `test`. If `test` is omitted, iterated values will be evaluated on whether they are truthy.

### Return Value

Returns `true` if any one of the iterated values of `iter` passes `test`; otherwise returns `false`.

## Example

```javascript
const some = require('@lamansky/some')

const arr = [1, 2, 3]

some(arr, n => n % 2 === 0) // true
some(arr, 1) // true
some(arr, [3, 4]) // true

some(arr, n => n > 3) // false
some(arr, 4) // false
some(arr, [4, 5]) // false

// Supports the bind operator
arr::some(n => n % 2 === 0) // true
```

## Related

* [every](https://github.com/lamansky/every)
