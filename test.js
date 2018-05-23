'use strict'

const assert = require('assert')
const some = require('.')

describe('some()', function () {
  it('should return false for an empty array', function () {
    assert.strictEqual(some([], x => true), false)
  })

  it('should return true if test function returns true for any iterated value', function () {
    assert.strictEqual(some(['str', 1, 2, 3], x => typeof x === 'number'), true)
  })

  it('should return false if test function returns false for all iterated values', function () {
    assert.strictEqual(some([1, 2, 3], x => false), false)
  })

  it('should return true if any iterated value is contained in test array', function () {
    assert.strictEqual(some([1, 2, 3], [3, 4]), true)
  })

  it('should return false if no iterated value is contained in test array', function () {
    assert.strictEqual(some([1, 2, 3], [4, 5]), false)
  })

  it('should return true if any iterated value equals test', function () {
    assert.strictEqual(some([1, 2, 3], 1), true)
  })

  it('should return false if no iterated value equals test', function () {
    assert.strictEqual(some([1, 2, 3], 4), false)
  })

  it('should return true if any iterated value is truthy when test is omitted', function () {
    assert.strictEqual(some([0, 1, 2]), true)
  })

  it('should return false if every iterated value is falsey when test is omitted', function () {
    assert.strictEqual(some([0, 0, 0]), false)
  })

  it('should work on non-array iterables', function () {
    assert.strictEqual(some([1, 2, 3][Symbol.iterator](), x => typeof x === 'number'), true)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(some.call(['str', 1, 2, 3], x => typeof x === 'number'), true)
  })
})
