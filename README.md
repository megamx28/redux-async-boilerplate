# Redux Async Boilerplate

[![dependencies](https://david-dm.org/shanedasilva/redux-async-boilerplate.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate)
[![devDependency Status](https://david-dm.org/shanedasilva/redux-async-boilerplate/dev-status.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate#info=devDependencies)

React Redux Async Boilerplate is a starter app designed to support small to midsized production apps. By starting with a complete build and test environment, you can focus what matters, which is building you application.

This boilerplate uses Webpack, React, React Hot Module Replacement Redux, React Router, Karma, Mocha, Chai and more to create an easy to use development environment.

## Getting Started

### Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/rackt/redux)
* [react-router](https://github.com/rackt/react-router)
* [react-router-redux](https://github.com/rackt/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [babel](https://github.com/babel/babel)
* [karma](https://github.com/karma-runner/karma)
* [eslint](http://eslint.org)
* [storybook](https://github.com/kadirahq/react-storybook)


### Install

    $ git clone https://github.com/shanedasilva/redux-async-boilerplate.git
    $ npm install
    $ npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser to display the app.

### NPM Commands
|`npm run <script>`|Description|
|------------------|-----------|
|`dev`|Serves your app at `localhost:3000`. HMR will be enabled in development|
|`lint`|Lint all `.js` files|
|`lint:fix`|Lint and fix all `.js` files|
|`test`|Runs unit tests with Karma|
|`test:watch`|Runs unit tests and runs watcher|
|`test:coverage`|Runs unit tests with Karma and generates a coverage report|
|`doctor`|Removes node_modules, reinstalls and runs dev|
|`clean`|Cleans out the dist folder|
|`compile`|Compiles src to dist. Overrides `NODE_ENV` to "production".|
|`deploy`|Runs lint, tests, clean and deploy|
|`storybook`|Serves the Storybook app at `localhost:9001`. Looks for all `.stories.js` files. [Read more](https://github.com/kadirahq/react-storybook).|
|`storybook:publish`|Builds a static version of Storybook at `/storybook-build-dir`|

## Development

### Developer Tools

### API

### Routing

### Testing

### Path Aliases

### Globals

### Styles
