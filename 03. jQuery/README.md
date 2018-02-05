# jQuery - DOM & Data

jQuery is a JavaScript library. It's primary goal 
is DOM manipulation and crossbrowser compatibility.

## Objectives

Students will be able to: 

- Modify the DOM 
- Apply event listeners
- Create complex interactions

## Overview

jQuery is a tool that has been around 
for a long and you will likely run into 
it in the future. Understanding how jQuery 
functions will give you a better understanding 
of JavaScript. 

## jQuery

jQuery is a library. Loaidng the library 
stores a reference to the global object
under these two names: 

- `$`
- `jQuery`

jQuery is both a function and an object!

### Selectors

Most often you will use jQuery to select
DOM elements and modify those elements. 

The jQuery function takes any CSS selector 
string and returns a collection of DOM 
elements that match the query. 

For example 

`$('div')`

Selects all divs. Or 

`$('#email-form')`

selects the element with the id name 
email-form.

### Collection and Return values

jQuery stores a collection of the most
recent query. 

jQuery also returns a reference to jQuery. 
This allows you to chain calls to jQuery. 

`$('div').css('border', 'solid 1px #000')`

Adds a border to all divs. 

`$('#email-form').submit(function(e) { ... })`

Adds a submit event handler to the element 
with the id email-form. 

Or, 

`$('h3').css('border-bottom', '1px solid #000').next('p').css('color', 'red')`

This is line is idomatic jQuery. The line beigns
with a selector with method calls chained. 

Generally, jQuery methods fall in one of three
types. 

- DOM modifiers
  - `.css()`
  - `.attr()`
  - `.data()`
  - `.hide()`
  - `.show()`
  - `.html()`
  - ...
- event listeners 
  - `.click()`
  - `.submit()`
  - `.hover()`
  - `.on()`
  - ...
- collection modifiers 
  - `.parent()`
  - `.next()`
  - `.siblings()`
  - ...

jQuery also has a few other methods like Ajax. 

### Events

`.click()`
`.hover()`
`.submit()`
`.on()`

### Information

`.data()`
`.attr()`
`.css()`

### Behavior

`.html()`
`.show()`/`.hide()`
`.fadeIn()`/`.fadeOut()`
`.append()`/`.prepend()`

### AJAX

```js
$('#article-form').submit(function (e) {
  var articleId = window.location.pathname.split('/')[2];
  var article = $(this).serializeArray();

  $.ajax({
    type: 'PUT',
    url: '/articles/' + articleId,
    data: { article: article },
    success: function(data) {
      window.location.href = '/articles/' + articleId;
    },
    error: function(err) {
      alert('AHHHHH!!!!')
    }
  });
});
```

`.post()`
`.get()`

## Resources

1. [10 Most Common jQuery Functions](https://gist.github.com/azat-co/5898111)
1. [Code School: Try jQuery](https://www.codeschool.com/courses/try-jquery)
1. [Code School AJAX Tutorial (6 min Video)](https://www.youtube.com/watch?v=My0MDTl0Zv4)

## Baseline Challenges
