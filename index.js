
module.exports = function raise(Klass, message) {
  if (Klass instanceof Error) {
    var up = Klass
    throw up
  }
  if (typeof Klass != 'function') {
    message = Klass
    Klass = Error
  }
  throw new Klass(message)
}
