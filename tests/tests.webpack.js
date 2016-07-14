// require all `tests/**/*.js`
require('core-js/es5');

const testsContext = require.context('./', true, /.+\.spec\.js?$/);
testsContext.keys().forEach(testsContext);