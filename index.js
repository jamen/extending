var assign = require('deep-assign');
var toObject = function toObject(item) {
  var res = assign({}, item);

  /* eslint no-use-before-define: 0 */
  for (var prop in extending.helpers) {
    if (prop in res) {
      delete res[prop];
    }
  }

  return res;
};

var extending = module.exports = function extending(input, extension, alter) {
  var extendable = function extendable(create) {
    return extending(extendable, create, alter);
  };
  assign(extendable, extending.helpers, input, extension);
  if (alter) {
    alter(extendable);
  }
  return extendable;
};

extending.helpers = {
  extend: function(input) {
    return extending(this, input);
  },
  toObject: function() {
    return toObject(this);
  },
  toJSON: function() {
    return toObject(this);
  }
};
