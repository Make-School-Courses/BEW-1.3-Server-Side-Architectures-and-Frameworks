# TDD Part 2 - Testing Async

Testing async operations is a little more difficult than testing synchronous 
operations. Async actions requires our tests to wait for a reply. 

Note! If an operation takes longer than 2 secs Mocha will time out and mark 
the test as failing! 

You can extend the time for tests by adding the timeout flag when calling mocha.

`--timeout 5000`

## You must call done()

When testing async operations your test blocks will take `done` as a param. 
Those functions **must** call done when they complete whatever it is they are 
doing. 

Here is an example: 

```
it('Should return an array of posts', (done) => {
  Post.find({}).then((posts) => {     // Searches for all Posts
    expect(posts).to.be.an('array');  // Expects posts to be an array
    done();                           // Calls done on a success
  }).catch((err) => {
    done(err);                        // Or call done with an error.
  });
});
```

Calling `done()` tells mocha to move on to the next test. 

Calling `done(error)` with an error tells mocha the error failed and prints
the error. 

### Promises and Mocha js

Mocha JS understands and works with Promises. Running async code you can return a 
promise and **omit** the `done` parameter and `catch()` call at the end. 

Here is a sample 

```
it('Should return an array of posts', () => {
  return Post.find({}).then((posts) => {     // Searches for all Posts
    expect(posts).to.be.an('array');         // Expects posts to be an array
  });
});
```

## describe() 

You can group tests with the describe block. The describe block runs tests as 
a group and reports on the group. 

```
describe('testing posts', () => {
  it('should fetch an array of posts');
  it('should add a post');
  it('should remove a post');
});

describe('testing users', () => {
  it('should fetch an array of users');
  it('should add a user');
  it('should remove a user');
});
```

Should output something like: 

```
testing posts
  - should fetch an array of posts
  - should add a post
  - should remove a post

testing users
  - should fetch an array of users
  - should add a user
  - should remove a user
```

This will be effected by the reporter! Nyan cat, sadly, does 
not make much use of describe. 

Describe blocks can be nested!

### Before and After 

Mocha provides some methods that run before and after tests. These are:

- before() - Runs before **all** tests
- beforeEach() - Runs before **each** test
- after() - Runs after all tests
- afterEach() - Runs after **each** test

You might use this to:

- Start your database
- Create records used in tests
- Remove records created for tests

For example: 

```
let testPost;

before(() => {
  testPost = new Post({ name: "TESTING" });
  return testPost.save();
});

after(() => {
  return testPost.remove();
});
```

The code above would create a new post **before** tests. Then
remove that post after tests were completed. 


## Challenges 

Solve this series of challenges using tests organized in describe blocks. 
This time you write the test code yourself from the descriptions below. 

Use one of your projects or create a project to use with these tests. 
The tests all require finding, creating and removing documents from 
mongodb. 

The test descriptions below assume Post and User models. If your models 
have different names you can substitute them. You need two models to 
work with.

- Should return an array of posts
- Should add a new post
- Should fetch a post with valid properties
- Should create a new user
- Should find a user with an id
- Should find a user with valid properties
- Should remove a user



