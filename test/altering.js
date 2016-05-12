var test = require('tape');
var extending = require('..');

test('extending', function(t) {
  var fooplus = function fooplus(item) {
    item.foo++;
  };

  var foo = extending({foo: 1, bar: 2}, null, fooplus);
  t.is(foo.foo, 2, 'initial altering');

  var bar = foo({bar: 3});
  t.is(bar.foo, 3, 'extendable altering');

  t.end();
});
