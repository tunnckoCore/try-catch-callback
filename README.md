# [try-catch-callback][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] [![npm downloads][downloads-img]][downloads-url] 

> try/catch block with a callback, used in [try-catch-core][]. Use it when you don't care about asyncness so much and don't want guarantees. If you care use [try-catch-core][].

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i try-catch-callback --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const tryCatchCallback = require('try-catch-callback')
```

### [tryCatchCallback](index.js#L44)
> Pass a synchronous `fn` that returns some result and handle completion or errors in `cb` if given, otherwise it returns thunk which accepts that `cb`. It's possible to not work in "async mode", if that's the case try to use [try-catch-core][] for your case, which guarantees that `cb` is called only once and always in next tick, using [dezalgo][] and [once][].

**Params**

* `<fn>` **{Function}**: function to be called.    
* `[cb]` **{Function}**: callback with `cb(err, res)` signature.    
* `[opts]` **{Object}**: optional options, such as `context` and `args`    
* `[opts.context]` **{Object}**: context to be passed to `fn`    
* `[opts.args]` **{Array}**: custom argument(s) to be pass to `fn`, given value is arrayified    
* `[opts.passCallback]` **{Boolean}**: pass `true` if you want `cb` to be passed to `fn` args.    
* `returns` **{Function}** `thunk`: if `cb` not given.  

**Example**

```js
var tryCatch = require('try-catch-callback')

tryCatch(function () {
  return 'fox qux'
}, function done (err, res) {
  if (err) return console.error(err)
  console.log(res) // => 'fox qux'
})
```

**passing custom context**

```js
const tryCatch = require('try-catch-callback')

tryCatch(function () {
  console.log(this.foo) // => 'bar'
  console.log(this.baz) // => 'qux'
  return `${this.foo}/${this.baz}`
}, function done (err, res) {
  if (err) return console.error(err)
  console.log(res) // => 'bar/qux'
}, {
  context: { foo: 'bar', baz: 'qux' }
})
```

**passing custom arguments**

```js
const tryCatchCallback = require('try-catch-callback')
const done = (err, res) => console.log(res)
const opts = {
  args: [ { foo: 'zzz' }, 123 ]
}

tryCatchCallback((ctx, qux) => {
  return ctx.foo + qux
}, done, opts)
// => 'zzz123'
```

## Related
- [catchup](https://www.npmjs.com/package/catchup): Graceful error handling. Because core `domain` module is deprecated. This share almost… [more](https://github.com/tunnckocore/catchup#readme) | [homepage](https://github.com/tunnckocore/catchup#readme "Graceful error handling. Because core `domain` module is deprecated. This share almost the same API.")
- [gana-compile](https://www.npmjs.com/package/gana-compile): Pretty small synchronous template engine built on ES2015 Template Strings, working on… [more](https://github.com/tunnckocore/gana-compile#readme) | [homepage](https://github.com/tunnckocore/gana-compile#readme "Pretty small synchronous template engine built on ES2015 Template Strings, working on `node@0.10` too. No RegExps, support for helpers and what you want. Use [gana][] if you wanna both async and sync support.")
- [gana](https://www.npmjs.com/package/gana): Small and powerful template engine with only sync and async compile. The… [more](https://github.com/tunnckocore/gana#readme) | [homepage](https://github.com/tunnckocore/gana#readme "Small and powerful template engine with only sync and async compile. The mid-level between [es6-template][] and [gana-compile][].")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Asynchronous and sync tryCatch in one place. The callback is securely wrapped… [more](https://github.com/tunnckocore/try-catch-core#readme) | [homepage](https://github.com/tunnckocore/try-catch-core#readme "Asynchronous and sync tryCatch in one place. The callback is securely wrapped with a [dezalgo][] and [once][].")
- [try-require-please](https://www.npmjs.com/package/try-require-please): Try to require the given module, failing loudly with default message if… [more](https://github.com/tunnckocore/try-require-please#readme) | [homepage](https://github.com/tunnckocore/try-require-please#readme "Try to require the given module, failing loudly with default message if module does not exists.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/try-catch-callback/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[dezalgo]: https://github.com/npm/dezalgo
[es6-template]: https://github.com/tunnckocore/es6-template
[gana-compile]: https://github.com/tunnckocore/gana-compile
[gana]: https://github.com/tunnckocore/gana
[once]: https://github.com/isaacs/once
[try-catch-core]: https://github.com/tunnckocore/try-catch-core

[npmjs-url]: https://www.npmjs.com/package/try-catch-callback
[npmjs-img]: https://img.shields.io/npm/v/try-catch-callback.svg?label=try-catch-callback

[license-url]: https://github.com/tunnckoCore/try-catch-callback/blob/master/LICENSE
[license-img]: https://img.shields.io/npm/l/try-catch-callback.svg

[downloads-url]: https://www.npmjs.com/package/try-catch-callback
[downloads-img]: https://img.shields.io/npm/dm/try-catch-callback.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/try-catch-callback
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/try-catch-callback.svg

[travis-url]: https://travis-ci.org/tunnckoCore/try-catch-callback
[travis-img]: https://img.shields.io/travis/tunnckoCore/try-catch-callback/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/try-catch-callback
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/try-catch-callback.svg

[david-url]: https://david-dm.org/tunnckoCore/try-catch-callback
[david-img]: https://img.shields.io/david/tunnckoCore/try-catch-callback.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

