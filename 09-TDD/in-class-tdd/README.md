# TDD Quick Start

This project contains some simple tests that are run by Mocha and Chai. The concepts here cover the idea of TDD.

## Step 1: Install Dependencies

To run tests, first install `mocha` and `chai` as `devDependencies`.

```bash
$ npm install --save-dev mocha
$ npm install --save-dev chai
```

## Step 2: Update `scripts` in `package.json`

The following two scripts run tests on all files in all folders named `*.test.js`. Tests are run from commands in `package.json`.

Edit the `scripts` section of your project's `package.json` file:

```json
"test": "mocha **/*.test.js",
"test-watch": "nodemon --exec 'npm test'"
```

## Step 3: Run Tests

With the above added to `package.json`, you can run tests by executing the following command:

```bash
$ npm test
```

Or, simply monitor those tests with `nodemon` by running:

```bash
$ npm run test-watch
```
