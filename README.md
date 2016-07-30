# Redux Async Boilerplate

[![dependencies](https://david-dm.org/shanedasilva/redux-async-boilerplate.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate)
[![devDependency Status](https://david-dm.org/shanedasilva/redux-async-boilerplate/dev-status.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate#info=devDependencies)

React Redux Async Boilerplate is a starter app designed to support small to midsized production apps. By starting with a complete build and test environment, you can focus what matters, which is building you application.

This boilerplate uses Webpack, React, React Hot Module Replacement Redux, React Router, Karma, Mocha, Chai and more to create an easy to use development environment.

### Install

    $ git clone https://github.com/shanedasilva/redux-async-boilerplate.git
    $ npm install
    $ npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser to display the app.

### NPM Commands
|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|






* `npm run dev`
* `npm run lint`
* `npm run lint:fix`
* `npm run test`
* `npm run test:watch`
* `npm run clean`
* `npm run compile`
* `npm run deploy`
