# Test Driven Development - intro

This project contains some simple tests that are run by Mocha and Chai.
The concepts here cover the idea of TDD.

To run tests first intall `mocha` and `chai`.

`$ npm install --save-dev mocha`

`$ npm install --save-dev chai`

## Testing

Run a test with:

`mocha **/*.test.js`

This runs tests on all files in all folders named `*.test.js`.

Tests are run from commands in `package.json`:

```
"test": "mocha **/*.test.js",
"test-watch": "nodemon --exec 'npm test'"
```

With the following added to `package.json` you can run Tests
with:

`npm test`

or monitor those tests with nodemon by running:

`npm run test-watch`
