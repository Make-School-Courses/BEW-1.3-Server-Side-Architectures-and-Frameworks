# jQuery - DOM & Data

## Initial Exercise

## Objectives

## Overview

### Selectors

### Events
`.on()`
`.click()`
`.submit()`

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
