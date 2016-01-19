// require all `tests/**/*.js`
const testsContext = require.context('./', true, /.+\.spec\.js?$/)
testsContext.keys().forEach(testsContext)