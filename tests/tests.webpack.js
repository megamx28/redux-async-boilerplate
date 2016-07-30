require('core-js/es5');
require('core-js/es6/symbol');

const testsContext = require.context('./', true, /.+\.spec\.js?$/);
testsContext.keys().forEach(testsContext);