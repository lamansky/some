'use strict'

const ffn = require('ffn')
const sbo = require('sbo')

module.exports = sbo(function some (iter, test) {
  test = ffn(test)
  for (const val of iter) if (test(val)) return true
  return false
})
