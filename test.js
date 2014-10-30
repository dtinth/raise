
var raise = require('./')
var util = require('util')

function MyError(message) {
  Error.call(this)
  this.message = message
}
util.inherits(MyError, Error)

try {
  raise('Ouch')
} catch (e) {
  if (e.message != 'Ouch') throw new Error('Message expectation failed. Got: ' + e.stack)
}

try {
  raise(MyError, 'Whee')
} catch (e) {
  if (!(e instanceof MyError)) throw new Error('Class expectation failed. Got: ' + e.stack)
  if (e.message != 'Whee') throw new Error('Message expectation failed. Got: ' + e.stack)
}

try {
  var up = new MyError('Whee')
  raise(up)
} catch (e) {
  if (e != up) throw new Error('Expected raise to throw up. Got: ' + e.stack)
}

console.log("\033[1;32m素晴らしい！\033[0m")
