# Redux Async Boilerplate

[![build status](https://img.shields.io/travis/shanedasilva/redux-async-boilerplate/master.svg?style=flat-square)](https://travis-ci.org/shanedasilva/redux-async-boilerplate)
[![dependencies](https://david-dm.org/shanedasilva/redux-async-boilerplate.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate)
[![devDependency Status](https://david-dm.org/shanedasilva/redux-async-boilerplate/dev-status.svg)](https://david-dm.org/shanedasilva/redux-async-boilerplate#info=devDependencies)

React Async Boilerplate is a starter app designed to support small to midsized production apps. By starting with a complete build and test environment, you can focus what matters, which is building you application.


### Install

    $ npm install
    $ npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser to display the app.

### NPM Commands
* `npm run dev`: Starts up the local development environment
* `npm run lint`: Runs ESlint against all JS files in the src directory
* `npm run lint:fix`: Runs lint command and corrects any errors
* `npm run test`: Runs Mocha tests using Karma runner
* `npm run test:watch`: Continiously listens for test changes and runs test comman
* `npm run clean`: Cleans out the dist directory
* `npm run compile`: Triggers Webpack production build
* `npm run deploy`: Runs npm test, dist and compile