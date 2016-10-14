# Redux Async Boilerplate

[![Build Status](https://travis-ci.org/shanedasilva/darklaunch.svg?branch=master)](https://travis-ci.org/shanedasilva/darklaunch)
[![Code Climate](https://codeclimate.com/github/shanedasilva/redux-async-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/shanedasilva/redux-async-boilerplate)
[![Test Coverage](https://codeclimate.com/github/shanedasilva/redux-async-boilerplate/badges/coverage.svg)](https://codeclimate.com/github/shanedasilva/redux-async-boilerplate/coverage)
[![dependencies](https://david-dm.org/shanedasilva/redux-async-boilerplate.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate)
[![devDependency Status](https://david-dm.org/shanedasilva/redux-async-boilerplate/dev-status.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate#info=devDependencies)

Redux Async Boilerplate is an enterprise level boilerplate application. it provides a modern development environment and build process so you can skip the setup and get started building out your application.


This boilerplate features [react](https://github.com/facebook/react), [redux](https://github.com/rackt/redux), [react-router](https://github.com/rackt/react-router), [react-router-redux](https://github.com/rackt/react-router-redux), [webpack](https://github.com/webpack/webpack), [babel](https://github.com/babel/babel), [karma](https://github.com/karma-runner/karma), [eslint](http://eslint.org), [storybook](https://github.com/kadirahq/react-storybook)

## Installation


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
|`storybook:deploy`|Builds a static version of Storybook and deploys to github pages using the URL of your repository|

## Development

### Developer Tools

Redux DevTools is a development time package that provides power-ups for your Redux development workflow. By default, the dock and log monitors are provided but more can be added by editing `src/containers/devTools.js`. The dev tools won't be included when `NODE_ENV` is set to "production".

### Routing

We use `react-router` [route definitions](https://github.com/reactjs/react-router/blob/master/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application.

### Testing

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. If you're creating component tests, you can also add your `.spec.js` file to the component director. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

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

### Storybook
React Storybook is being used as the component test bed. It allows developers to develop and design UI components out of your app, and in an isolated environment Read the full Storybook documentation [here](https://github.com/kadirahq/react-storybook)

View the demo static site at [here](https://shanedasilva.github.io/redux-async-boilerplate).

## Contribution guidelines
Right now I'm building and maintaining this project myself. If you'd like to contribute, please do. Make a pull requests and we'll go from there!

## Credits
There are so many solid starter apps out there right now. This is an amalgamation of the many I've tried. Thanks to everyone for the inspiration!

## License
Copyright (c) 2016 Shane Da Silva

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
