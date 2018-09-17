# Day 11: Testing Authentication & Authorization

## Minute-by-Minute

| **Elapsed** | **Time**  | **Activity**              |
| ----------- | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:20      | Initial Exercise          |
| 0:25        | 0:20      | Overview                  |
| 0:00        | 0:25      | In Class Activity I       |
| 0:00        | 0:10      | BREAK                     |
| 0:00        | 0:00      | In Class Activity II      |
| 0:00        | 0:00      | Wrap Up                   |
| TOTAL       | 0:80      |                           |

## Learning Objectives/Competencies (5 Minutes)

## Initial Exercise (20 Minutes)

### Reading (10 Minutes)

Please read this article on [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs). Primarily focusing on a modern-day approach to testing in JavaScript, this article contains quite a bit of review with regards to what we covered on [Day 9](../09-TDD/README.md). Keen eyes will also note that this article  **introduces more advanced topics** that we'll **dive into during today's lesson**!

### Reflection (10 Minutes)

Answer the following questions in your notes:

1. What is a **mock**?
1. What is a **stub**? How is a **mock different from a stub**?
1. What is a **spy**?

If you **finish the reflection early**, further **discuss, compare, and contrast** your answers **with your peers**.

## Overview / TT (20 Minutes)

### Walkthrough: Integration Testing

#### Syntax

##### `describe`

##### `it`

##### `beforeEach`

##### `afterEach`

#### Test Fixtures

## In Class Activity I (25 Minutes)

### Sinon Setup / Challenges

1. Create a new Node project:

    ```bash
    mkdir new-project && cd new-project
    npm init
    ```

1. Install Mocha, Chai, and Sinon dependencies:

    ```bash
    npm install --save-dev mocha
    npm install --save-dev chai
    npm install --save-dev sinon
    ```

1. Create a new `test` folder inside your Node project, with a `sample.test.js` file inside:

    ```bash
    mkdir test && touch sample.test.js
    ```

1. Add the following code to `sample.test.js`:

    ```js
    // FILE: sample.test.js

    // TODO: Add required imports here.

    function greaterThanFive(num) {
        if (num > 5) return true;
        return false;
    }

    describe('Example Sinon Stub', () => {
        it('should pass', (done) => {
            const greaterThanFive = sinon.stub().returns('something');
            greaterThanFive(0).should.eql('something');
            greaterThanFive(0).should.not.eql(false);
            done();
        });
    });
    ```
1. Run the tests to ensure they pass.

    ```bash
    $ npm test

    Example Sinon Stub
    ✓ should pass
    ```

1. **Challenge**: Can you import the external libraries required to make the above test case run?
1. **Challenge**: Can you create a more sophisticated function, then write the corresponding test(s)?

## BREAK (10 Minutes)

## In Class Activity II (XX Minutes)

### Challenges

## Wrap Up (XX Minutes)

## After Class

Continue to practice Test Driven Development by **implementing authentication and authorization test cases** for your [Custom API Project](../Projects/02-Custom-API-Project.md).

## Additional Resources

* [SinonJS Documentation](https://sinonjs.org/releases/v6.3.3/) - Latest **official documentation** for SinonJS.
* [2018: Stubs, Spies, and Mocks in JavaScript](https://www.harrymt.com/blog/2018/04/11/stubs-spies-and-mocks-in-js.html) - Blog post on **how to use Stubs, Spies and Mocks for JavaScript tests**.
* [GitHub: JS Mocking Demo Repo](https://github.com/harrymt/js-mocking-demo) - **Example repository** containing **working code** that **integrates `Mocha`, `Chai`, and `SinonJS`**.
* [GitHub: Mocha, Chai and SinonJS Example Repo](https://github.com/joykare/testing-node-apps) - The **commits** on this repo are **very descriptive**. You can **use them to see different testing scenarios** in action.
* [GitHub: `chai-as-promised` Library](https://github.com/domenic/chai-as-promised) - **Chai as Promised** extends Chai with a fluent language for **asserting facts about promises**.
* [Stubbing HTTP Requests with Sinon](https://mherman.org/blog/stubbing-http-requests-with-sinon/)
* [Stubbing Node Authentication Middleware with Sinon](https://mherman.org/blog/stubbing-node-authentication-middleware-with-sinon/)
