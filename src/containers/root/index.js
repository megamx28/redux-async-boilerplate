if (__DEV__) {
  module.exports = require('./root.dev'); // eslint-disable-line global-require
} else {
  module.exports = require('./root.prod'); // eslint-disable-line global-require
}
