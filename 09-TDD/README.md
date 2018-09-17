# Day 9: Testing

This class will provide an introduction to unit testing with JavaScript.

**Test**

1. **noun** - a procedure intended to establish the quality, performance, or
reliability
of something, especially before it is taken into widespread use.
2. **verb** - take measures to check the quality, performance, or reliability
of (something), especially before putting it into widespread use or practice.

## TDD and BDD

Test Driven Development is popular trend in software development, that
uses software tests as a basis for development.

> Test-driven development (TDD) is a software development process that
> relies on the repetition of a very short development cycle: Requirements
> are turned into very specific test cases, then the software is improved
> to pass the new tests, only. This is opposed to software development that
> allows software to be added that is not proven to meet requirements.

In short TDD follows this cycle:

1. **Add a Test** - New features are added by first writting a test that fail.
2. **Run all tests** - This validates that the test is working as it should
not pass.
3. **Write code** - Write code that will causes the test to pass.
4. **Run tests** - If all tests pass you can be confident your code meets the
requirements of the tests cases. If tests fail fix them.
5. **Refactor code** - As the code base grows it must be cleaned up and
improved. Tests will hopefully find problems or errors introduced in this
step.
6. **Repeat** - With each cycle the functionality of the product should
increase.

TDD offers some advantages. It can increase productivity and avoid writing
unnecessary code. It also avoids errors and defects, and lengthy debugging
sessions.

- https://en.wikipedia.org/wiki/Test-driven_development

TDD does NOT solve all of the your problems for you. Some things are
difficult to test, UI interactions for example. **Some tests are difficult
write and evaluate**. Using TDD you might feel you are spending large amounts
of time writing tests, code which doesn't go directly into your finished
product.

For best results everyone on the team must support TDD, and tests must
carefully planned.

**It has been suggested that testing first produces better results than
writing tests after implementation.**

**BDD** (Behavior Driven Development) is an extension of TDD that focusses
on commuincation and collaboration. Imagine putting your tests into words.
BDD suggests that names assigned to unit test be whole sentences starting
with a conditional verb "should" for example. Taken further, these sentences
should describe adding value to the product. For example:

"it displays the a notifcation when a new post is created"

Some software libraries incorporate BDD into their interfaces. For example:

`user.should.have.properties("first", "last", "age");`

You can see this is code but it also is clearly read in english describing
important product features.

BDD will manifest for us first in libraries like Expect.js and Should.js.
These make assertions in code around BDD syntax like:

`should.have.properties()` and `expect().to.be()` or similar.

## Testing with Mocha

The goal of testing is to define software features that the app will have to
meet, and test those features to confirm the code works as expected.

Mocha.js is a testing framework that works with Node.js. Mocha runs tests
and displays the results.

Mocha **doesn't** handle assertions. Instead it allows you to define your
own assertions or use your favorite library.

## What's an Assertion?

- **Assertion**
  1. a confident and forceful statement of fact or belief.
  2. the action of stating something or exercising authority confidently and
  forcefully.

In software tests an assertion states what you expect and fails when the
results are not correct.

Assertion libraries:

- should.js
- expect.js
- chai.js

### What should you test?

- Everything (that can be tested)

Okay there are things that are difficult to test, which doesn't necessarily
mean that you should not test them. That said use you common sense when
defining tests.

If you think of a feature think of a test for that feature. Any function that
takes input and provides output can and should be tested!

### What is a good test?

A test should focus on **one** thing. That is, any single test should a single
feature.

Tests should test a **unique** feature and not be repeated.

Tests should be short. If you find you are writing a long test case step back
and ask if this test case should really be broken down into several smaller
tests.

### Final thoughts before the challenges

Writing tests for code before you have the code to test is a great mental
exercise. You may find that you will have to write code differently using
this perspective. You may find that you write better quality code.

### Testing with Mocha

Import the Mocha.js library as a dev dependancy.

`$ npm install --save-dev mocha`

This will include this library when you run dev scripts but **not** when you
build for production.

Import your assertion library as a dev dependancy. For these examples I
chose `chai.js`.

`$ npm install --save-dev chai`

### Defining test

Define a test case with the `it()` function:

```
it('Should do return the sum of two numbers', () => {
  // Run tests here.
});
```

A test fails when the `it` block throws an error. The test above would pass.
The test below would fail:

```
it('Should calculate area', () => {
  throw new Error('This test failed');
});
```

The idea is to write code that throws an error if the results are not what you
expect them to be.

```
it('should be 4', () => {
  const four = 2 + 2;
  if (four !== 4) {
    throw new Error(four + ' should be equal to 2 + 2');
  }
});
```

While this works the clever JavaScript elves have invented myriad libraries to
make our job easier.

Assertion libraries abstract this functionality. Write an assertion like this:

```
const chai = require('chai');
const expect = chai.expect;

it('should be 4', () => {
  const four = 2 + 2;
  expect(four).to.equal(4);
});
```

Assertion libraries can check for just about **any** value or type. Understanding their
syntax requires reading the docs!

For more info on chai check out the [docs](http://chaijs.com)

### Running tests

Run tests by calling mocha with the name of the file to test.

`mocha tests/post.test.js`

You can add a test script to package.json to simplify testing.

Set a test script in package.json.

```
"scripts": {
  "test": "mocha **/*.test.js"
}
```

This runs mocha looking at all files in all directories (`**/`) with file
names ending in '.test.js'. Run this in the terminal with:

`npm test`

You can also run this with nodemon. This might be a good option for small
projects and learning. With larger projects you will want to choose when
a test is run and launch tests purposefully.

`"test-watch": "nodemon --exec 'npm test'"`

_Don't miss the single quotes!_

Call this script with:

`npm run test-watch`

You can add Nyan Cat as a test reporter with `--reporter=nyan`:

`"test": "mocha **/*.test.js --reporter=nyan"`

Learn more about reporters [here](https://mochajs.org/#reporters).

## Class Challenges

**Setup**

Set up a new Node JS project.

1. Create a folder
2. npm init
3. Add dependancies
  - mocha
  - chai
4. define a test script
5. Add a file to hold your code
6. Add a test file

**Test cases**

Imagine you just got a job with a MeasureIt.com. They want to create an app that
measures everything. You'll need some methods that can return measurements.

- Area should return the area of a rectangle
- Perimeter should return the perimeter of a rectangle
- Should return the area of a circle with radius

You'll start by writing failing tests for these methods. Then write functions that
make the tests pass.

## Challenges

Your goal is to write code that meets the following test cases.

To help visualize the how the cart behaves you can picture the cart
as a table. Imagine the tables below were drawn up by the design
team to describe how the cart would work.

Imagine your shopping cart ie empty:

| name | price | qty | cost |
|------|-------|-----|------|
|      |       |     |      |

Imagine you add an apple to the cart

| name | price | qty | cost |
|------|-------|-----|------|
| apple| 0.99  |  1  | 0.99 |
| total|       |  1  | 0.99 |

What if you add a banana.

| name  | price | qty | cost |
|-------|-------|-----|------|
| apple | 0.99  |  1  | 0.99 |
| banana| 1.29  |  1  | 1.29 |
| total |       |  2  | 2.28 |

What if you add another apple?

| name  | price | qty | cost |
|-------|-------|-----|------|
| apple | 0.99  |  2  | 1.98 |
| banana| 1.29  |  1  | 1.29 |
| total |       |  3  | 3.27 |

**Overview**

The product is a shopping cart. The cart will track products added to a cart.
The cart needs to add new products, remove products, and provide the total count,
and price of all products in the cart.

Start with these test cases and write code to answer test case. Note there is no
code yet that does any of the things the tests ask for.

From a TDD perspective you would start with failing tests and build an application
to meet the requirements of the tests.

In terms of **BDD** the test descriptions are written to describe what the product
should be capable of doing.

```
it('Should create a new item with name and price');
it('Should return an array containing all items in cart');
it('Should add a new item to the shopping cart');
it('Should return the number of items in the cart');
it('Should remove items from cart');
// Stretch challenges
it('Should update the count of items in the cart');
it('Should remove an item when its count is 0');
it('Should return the total cost of all items in the cart');
```

**Hints**

The test cases all involve making a shopping cart system. While you
won't be making the entire functional shopping cart you will have
to create some of the system. Think about how shopping carts work.
Ask yourself how the cart will keep track of items and what exactly
an item is.

"Items" in the cart will be JavaScript Objects, and the "cart"
system will hold them in an array.

- Set up your tests run your code. All tests should be pending.
- Solve each test case one at a time by following the TDD pattern.
  1. Write functions that handle the test case. The functions should
  return a value the test case can evaluate.
  2. Run your tests. If the first case passes move on to the next, if
  not revise your code and test again.
- Solving one test case may break a previously working case. In this case
  refactor and test again.

Class Schedule

| time   |       | Activity   | Description          |
|--------|-------|------------|----------------------|
|  5mins |  5min | Talk       | Intro Mocha and Chai |
| 15mins | 20min | Pair       | Setup a project with Mocha and Chai |
| 30mins | 50min | I Do We Do | Dicuss pros/cons |
| 40mins | 90min | Pair       | Challenges |
| 20mins |110min | Talk       | Debrief and discuss TDD and BDD |


## After Class

Practice TDD by implementing test cases for your custom API project.
