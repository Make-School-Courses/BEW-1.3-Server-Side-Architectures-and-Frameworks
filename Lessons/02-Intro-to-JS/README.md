# Intro to JavaScript

## Schedule

1. Learning Objectives
1. 

## Learning Objectives

By the end of this lesson, students will be able to...

1. Recall basic JavaScript constructs such as functions, conditionals, loops, and objects.
1. (Optional) Recall ES6 JavaScript constructs such as arrow functions, etc.
1. Compare and contrast JavaScript code with Python.

## JavaScript: Wat

Watch the 4-minute [Wat video](https://www.destroyallsoftware.com/talks/wat) and briefly discuss.

### Activity: JSJeopardy [20 minutes]

Get into teams of 3-4 at your table.

Watch as the instructor demos snippets of JavaScript. Before the answer is revealed, write on your team's whiteboard what you predict the answer will be.

## TT: JavaScript fundamentals [30 minutes]

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

Spoiler: <spoiler> `ReferenceError: result is not defined` </spoiler>

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
    console.log(myList[i]);
}
```

Follow-up questions: How do you...

- Traverse the list backwards?
- Traverse every other element?

### For...Of Loops

Use this type of loop if you only want to do something to each array element, and don't care about the index.

```js
const myList = [ ... ]
for (const item of myList) {
    console.log(item);
}
```

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
    },
    pets: [
        {
            name: 'Bowser',
            type: 'dog'
        },
        {
            name: 'Snuffles',
            type: 'cat'
        }
    ]
}
```