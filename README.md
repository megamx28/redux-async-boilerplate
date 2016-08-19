# Redux Async Boilerplate

[![dependencies](https://david-dm.org/shanedasilva/redux-async-boilerplate.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate)
[![devDependency Status](https://david-dm.org/shanedasilva/redux-async-boilerplate/dev-status.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate#info=devDependencies)

React Redux Async Boilerplate is a starter app designed to support small to midsized production apps. By starting with a complete build and test environment, you can focus what matters, which is building you application.

This boilerplate features [react](https://github.com/facebook/react), [redux](https://github.com/rackt/redux), [react-router](https://github.com/rackt/react-router), [react-router-redux](https://github.com/rackt/react-router-redux), [webpack](https://github.com/webpack/webpack), [babel](https://github.com/babel/babel), [karma](https://github.com/karma-runner/karma), [eslint](http://eslint.org), [storybook](https://github.com/kadirahq/react-storybook)

## Getting Started

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

Redux DevTools is a development time package that provides power-ups for your Redux development workflow. By default, the dock and log monitors are provided but more can be added by editing `src/containers/devTools.js`. The dev tools won't be included when `NODE_ENV` is set to "production".

### Routing

We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [application structure](#application-structure) section for more information.

### Testing

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/index.js`.

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/index.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env.NODE_ENV`|the active `NODE_ENV` when the build started|
|`__DEV__`|True when `process.env.NODE_ENV` is `development`|
|`__PROD__`|True when `process.env.NODE_ENV` is `production`|


### Styles

Both `.scss` and `.css` file extensions are supported.
