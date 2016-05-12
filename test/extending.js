var test = require('tape');
var extending = require('..');

test('extending', function(t) {
  var foo = extending({foo: 1});
  t.is(foo.foo, 1, 'initial extension');

  var bar = foo({bar: 2});
  t.is(bar.foo, 1, 'inherited data');
  t.is(bar.bar, 2, 'new data');

  var baz = bar({baz: 3});
  t.is(baz.foo, 1, 'ancestor data');

  t.end();
});
