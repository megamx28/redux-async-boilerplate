if (__DEV__) {
  module.exports = require('./store.dev'); // eslint-disable-line global-require
} else {
  module.exports = require('./store.prod'); // eslint-disable-line global-require
}
