# Test-Driven Development

## Agenda

1. Learning Objectives (5 minutes)
1. Review: Promises (20 minutes)
1. Test-Driven Development (20 minutes)
1. BREAK (10 minutes)
1. The Mocha & Chai Test Libraries (20 minutes)
1. Activity: Write Tests for an API (30 minutes)
1. Wrap-Up (5 minutes)
1. Resources

## Learning Objectives

By the end of this lesson, students should be able to...

1. Read and understand code using Promises, callbacks, and arrow functions.
1. Write code to use and resolve Promises.
1. Identify reasons for using test-driven development.
1. Write API unit tests using Mocha, Chai, and Chai HTTP.

## Submit Homework (5 minutes)

Go to [Gradescope](https://gradescope.com) and submit the Reddit.js tutorial parts 4-5.

## Review: Promises (20 minutes)

Working with promises is an important part of writing vanilla JavaScript code. Let's review how they work and how to effectively use them!

### A Note on Arrow Functions

**Arrow functions** were added to the core JavaScript syntax as part of **ES6**. They work (almost) exactly like regular functions, but are shorter to write.

```js
// SHORTEST VERSION
> const doubleNum = num => num * 2;

// MORE VERBOSE VERSION
> const tripleNum = (num) => {
    return num * 3;
}

> doubleNum(6)
12
> tripleNum(6)
18
```

The above two examples are exactly the same as if I had written:

```js
const doubleNum = function(num) {
    return num * 2;
}
```

Arrow functions are just **"syntactic sugar"** for concepts that we already know!

### Working with a Promise return value

Calling a regular function is like receiving a present with no wrapping paper.

```js
const sayHello = function() {
    return 'Hello!';
}

sayHello(); // 'Hello!'
```

Calling a function that returns a Promise is like receiving a present in wrapping paper, with a note that says "Don't open until Christmas." Calling the Promise's `.then()` method with a callback is like saying, "When I open this present, I will...".

```js
let helloPromise = new Promise((resolve, reject) => {
    setTimeout( function() {
        resolve("Hello!")
    }, 1000);
});

helloPromise.then(message => {
    console.log("Promise is done! " + message);
})
```

When the Promise resolves, we execute the _callback function_ that was passed to `.then()`.

### Chaining Promises

If there are multiple steps in the process which return Promises (e.g. multiple calls to the database which each depend on one another), we can chain them together like so:

```js
let helloPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello!"), 1000);
});

helloPromise.then(message => {
  console.log("Promise is done! " + message);
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello 2!"), 1000);
  });
}).then(message => {
  console.log("Second promise is done! " + message);
})
```

Try out these examples on your own and see if you can experiment with using promises!


## Test-Driven Development (20 minutes)

### What is Test-Driven Development?

The test-driven development cycle consists of the following parts.

1. Add a test, either for a new feature or for a bug fix
1. Run all tests and see if the new test fails
1. Write code to make the test pass
1. Run the tests
1. Refactor the code
1. Repeat!

### Why use Test-Driven Development?

With a partner, discuss the possible benefits of TDD. Why is it recommended and used in some projects, and not others?

Then, read this [list of TDD benefits](https://dzone.com/articles/20-benefits-of-test-driven-development) and see if any stick out to you.

### TDD Best Practices

1. **Write the tests first.** This lets you focus on the requirements of the feature before you build out the feature itself. 
1. **Keep the tests small.** Each test should focus on a single scenario and feature. E.g. "Does this route return a response?", "When given an input, does the route return the expected output?".

## BREAK (10 minutes)

## The Mocha & Chai Test Libraries (20 minutes)

### Mocha

[**Mocha**](https://mochajs.org/) is a Node.js test framework for testing both synchronous and asynchronous code.

It helps break our test code into blocks that accept callbacks, in order to more easily understand what is being tested.

```js
describe('Books', () => {
    describe('/GET book', () {
        it('should GET all the books');
    });
    describe('/POST book', () => {
        it('should not POST a book with no title');
        it('should POST a book with all fields');
        it('should POST multiple books');
    });
})
```

### Chai & Chai-Http

[**Chai**](https://www.chaijs.com/) is an assertion library for Node.js that allows us to easily check whether our routes return data that looks like what we expect.

[**Chai HTTP**](https://www.chaijs.com/plugins/chai-http/) is an add-on plugin for Chai that makes it easier to test HTTP endpoints.

Using Chai, we can write code like this:

```js
chai.request(app)
  .put('/user/me')
  .send({ password: '123', confirmPassword: '123' })
  .end(function (err, res) {
     expect(err).to.be.null;
     expect(res).to.have.status(200);
  });
```

As a class, read through the [assertion styles](https://www.chaijs.com/guide/styles/) available using Chai.


## Activity: Write some API Tests (30 minutes)

Choose a partner who you haven't worked with yet. You will be pair programming (Driver & Navigator) for this activity.

Go to the [Node RESTful API Testing Tutorial](https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai) and follow the steps. Read along with your partner and discuss any code or concepts that you do not understand.

If you finish the tutorial early, discuss how the concepts you learned can be applied to your own API projects.

## Wrap-Up (5 minutes)

Continue working on the [Reddit.js](https://www.makeschool.com/academy/track/reddit-clone-in-node-js) tutorial. Parts 4-5 will be due next class.

Fill out our [Vibe Check form](https://make.sc/bew1.3-vibe-check) with any feedback you have for the class.

## Resources

1. [Promises Chaining](https://javascript.info/promise-chaining)
1. [Wikipedia: Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
1. [Testing Node.js with Mocha and Chai](https://mherman.org/blog/testing-node-js-with-mocha-and-chai/)
1. [Using the Chai Assertion Library](https://www.chaijs.com/plugins/chai-http/)