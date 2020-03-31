# Intro to JavaScript

## Schedule

1. Learning Objectives
1. Activity: JS Jeopardy
1. JavaScript fundamentals
1. BREAK
1. Work Time: Codecademy JS
1. Wrap-Up

## Learning Objectives

By the end of this lesson, students will be able to...

1. Recall basic JavaScript constructs such as functions, conditionals, loops, and objects.
1. (Optional) Recall ES6 JavaScript constructs such as arrow functions, etc.
1. Compare and contrast JavaScript code with Python.

## Submit Homework

Go to your [Gradescope](https://gradescope.com) account and submit your GIF Search project. It will be graded on completion only.

## Warm-Up Breakout: Observations

List 3 things that are different in JavaScript than what you are used to in Python. Submit your list in the Zoom chat.

## TT: JavaScript fundamentals [30 minutes]

### Semicolons

JavaScript has **optional semicolons** which can be used after statement of code. You will see them used in tutorials and assignments (they used to be required in old versions of JS), but you do not need to use them yourself.

### Variables: const, let, var

Use `const` if you are declaring a variable which will not be reassigned:

```js
> const myVar = 'hello';
> myVar = 4;
TypeError: Assignment to constant variable.
```

We can, however, still _modify_ the value of an object or list contained in a const variable; we just can't assign it to a _new_ object or list.

```js
> const myList = [1, 2, 3, 4];
> myList.push(5); // contains [1, 2, 3, 4, 5]
```

Use `let` if you are declaring a variable which will be reassigned:

```js
> let myVar = 'hello';
> myVar = 5;
```

In general, do not use `var` to assign variables. _Read [here](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) for an example of a bug caused by using var (and easily avoided with let)._

### Scoping

`const` and `let` both have "block" scoping - that is, a variable assigned in a block is not available to be used outside of the block. This is generally a good thing because it lets us encapsulate our variable declarations, but it does lead to some interesting errors.

```js
if (4 === 4) {
    let result = "four equals four";
}
console.log(result);
```

Result: <spoiler> `ReferenceError: result is not defined` </spoiler>

### Conditionals

A **conditional** in JavaScript looks like:

```js
if (condition) {
    // do something
}
```

where the _condition_ evaluates to a boolean (true or false).

Note: When comparing for equality, always use the `===` operator, not `==`. This is because `===` uses **strict** equality, which is always what we want. 

### For Loops

A typical for loop will use a **counter** variable to run a specific number of times.

```js
const myList = [ ... ]
for (let i = 0; i < myList.length; i += 1) {
    console.log(myList[i])
}
```

Follow-up questions: How do you...

- Traverse the list backwards?
- Traverse every other element?

### Functions

To write a function, use the `function` keyword:

```js
function sayHello(name) {
    console.log(`Hello, ${name}!`)
}
```

### Objects

Think of JavaScript objects (aka JSON) as collections of key-value pairs, where the values can either be _primitives_ (boolean, number, string), or can be _another_ collection of key-value pairs.

```js
const userInfo = {
    name: 'Ada',
    favoriteColor: 'blue',
    address: {
        street: '851 California St',
        city: 'San Francisco',
        state: 'CA'
    }
}
```

We can access the contents like this:

```js
const name = userInfo.name
```

## Break [10 minutes]

## TT: Arrow Functions & Intro to Promises

JavaScript, unlike Python, is an **asynchronous** language.

### Arrow Functions

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

## Work Time: Codecademy

Work on [Codecademy JS](https://www.codecademy.com/learn/introduction-to-javascript) parts 12 and 13. Feel free to ask someone sitting next to you if you get stuck or have questions!

## Wrap-Up

Complete [Codecademy JS](https://www.codecademy.com/learn/introduction-to-javascript) parts 12 and 13 and submit your work through [Gradescope](https://gradescope.com).