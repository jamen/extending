# Extending [![Build State][travis-img]][travis]
> Create extremely simple extendable objects.

```javascript
var extending = require('extending');

// Create initial object
var foo = extending({ foo: 1 });
console.log(foo.foo);

// Extend off it by calling it as a function
var bar = foo({ bar: 2 });

// Continue extending with new objects.
var baz = bar({ baz: 3 });

console.log([ baz.foo, baz.bar, baz.baz ]);
// => [1, 2, 3]
```

## Installation
```shell
$ npm install --save extending
```
```javascript
var extending = require('extending');
```

## API
### `extending([object])`
Create an easily extendable object.
 - `object` (`Object`): Object to start with (default: `{}`).

Returns an "extendable", a function with your object's properties that can be called to extend.

Example:
```javascript
var foo = extending({ ... });
var bar = foo({ ... });
var baz = bar({ ... });
// ...
```

### `extendable([object])`
The result of calling `extending`, your extendable object.
 - `object` (`Object`): Extension on the original object.

This function has the properties of your object.

#### `extendable.toObject()` Helper
Create an object from the extendable.

Example:
```javascript
var foo = extending({ foo: 1, bar: 2 });
foo.toObject();
// => { foo: 1, bar: 2 }
```

#### `extendable.extend([object])` Helper
An alias to calling the extendable function.
 - `object` (`Object`): Extension on the original object.

Example:
```javascript
var foo = extending({ foo: 1 });
var bar = foo.extend({ bar: 2 });
var baz = bar.extend({ baz: 3 });
// ...
```

#### `extendable.toJSON()` Helper
Serialize your extendables into JSON.

Example:
```javascript
var foo = extending({ foo: 1 });
var bar = foo.extend({ bar: 2 });
var baz = bar.extend({ baz: 3 });

JSON.stringify(baz);
// => "{ \"foo\": 1, \"bar\": 2, \"baz\": 3 }"
```


## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

## License
[MIT](LICENSE) &copy; Jamen Marzonie

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
  [travis]: https://travis-ci.org/jamen/extending
  [travis-img]: https://travis-ci.org/jamen/extending.svg
