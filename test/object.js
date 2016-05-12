var test = require('tape');
var extending = require('..');

test('extending', function(t) {
  var foo = extending({foo: 1});
  t.same(
    foo.toObject(),
    {foo: 1},
    'serialize initial.'
  );

  var bar = foo({bar: 2});
  t.same(
    bar.toObject(),
    {foo: 1, bar: 2},
    'serialize extension.'
  );

  t.end();
});
