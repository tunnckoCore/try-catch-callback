/*!
 * try-catch-callback <https://github.com/hybridables/try-catch-callback>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var test = require('mukla')
var tryCatch = require('./index')

test('should throw TypeError if `fn` not a function', function (done) {
  function fixture () {
    tryCatch(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `fn` to be a function/)
  done()
})

test('should throw TypeError if no function passed to the thunk', function (done) {
  var thunk = tryCatch(function () {
    return 'qux'
  })
  function fixture () {
    thunk(123)
  }
  test.throws(fixture, TypeError)
  test.throws(fixture, /expect `cb` to be a function/)
  done()
})

test('should get error in `cb` if `fn` throws', function (done) {
  tryCatch(function () {
    throw new Error('foo qux')
  }, function (err) {
    test.ifError(!err)
    test.strictEqual(err.name, 'Error')
    test.strictEqual(err.message, 'foo qux')
    done()
  })
})

test('should get result in `cb` if `fn` returns', function (done) {
  tryCatch(function () {
    return 'foo bar'
  }, function (err, res) {
    test.ifError(err)
    test.strictEqual(res, 'foo bar')
    done()
  })
})

test('should return thunk if no `cb` passed', function (done) {
  var thunk = tryCatch(function () {
    return 123
  })
  thunk(function (err, res) {
    test.ifError(err)
    test.strictEqual(res, 123)
    done()
  })
})

test('should pass the `cb` to `fn` if 3rd arg is strictly `true`', function (done) {
  tryCatch(function (cb) {
    test.strictEqual(typeof cb, 'function')
  }, { passCallback: true }, done)
})

test('should `fn` not have arguments if 3rd arg is not `true`', function (done) {
  tryCatch(function () {
    test.strictEqual(arguments.length, 0)
  }, done)
})

test('should be able to pass custom arguments to `fn` through options', function (done) {
  tryCatch(function (foo, bar, qux) {
    test.strictEqual(arguments.length, 3)
    test.strictEqual(foo, 1)
    test.strictEqual(bar, true)
    test.strictEqual(qux, 'foo')
  }, { args: [1, true, 'foo'] }, done)
})

test('should be able to pass custom `fn` context through options', function (done) {
  tryCatch(function (aa) {
    test.strictEqual(aa, 'bb')
    test.strictEqual(this.foo, 'bar')
  }, {
    context: { foo: 'bar' },
    args: 'bb'
  }, done)
})

test('should pass custom context using `tryCatch.call`', function (done) {
  tryCatch.call({ abc: 'def', qux: true }, function () {
    test.strictEqual(this.abc, 'def')
    test.strictEqual(this.qux, true)
  }, done)
})

test('should allow passing options when want thunk', function (done) {
  var thunk = tryCatch(function () {
    test.strictEqual(this.a, 'b')
  }, { context: { a: 'b' } })

  test.strictEqual(typeof thunk, 'function')
  thunk(done)
})

test('should return error if `opts.return:true`', function (done) {
  var err = tryCatch(function () {
    throw new TypeError('foo baq xx')
  }, { return: true })

  test.strictEqual(err.name, 'TypeError')
  test.strictEqual(err.message, 'foo baq xx')
  done()
})

test('should return value if `opts.return:true`', function (done) {
  var val = tryCatch(function () {
    return 123
  }, { return: true })

  test.strictEqual(val, 123)
  done()
})
