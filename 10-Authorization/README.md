# Day 10: Authorization with JWT & Cookies

## Minute-by-Minute

| **Elapsed** | **Time**  | **Activity**              |
| ----------  | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:20      | TT/Overview               |
| 0:25        | 0:10      | BREAK                     |
| 0:35        | 0:60      | Challenges                |
| 1:35        | 0:25      | API Project: TDD          |
| TOTAL       | 2:00      |                           |

## Objectives (5 Minutes)

1. Explain the differences between authentication and authorization.
1. Use jQuery to manage authorization in your app.

## Overview (20 Minutes)

We are using securely signed JSON Web Tokens (JWT) to authenticate our users access to our APIs. We can have webhooks that are only accessible by people who are logged in and can prove it with verifiable, signed JWT's.

However, what about making your site look different if a user is logged in or logged out? Or what if you have different types of users that should see things a little differently?

jQuery to the rescue!!!

### jQuery DOM Manipulation

jQuery is a library that extends vanilla JavaScript. For example, the following two blocks of code do the same thing:

```js
// jQuery Example - Change the body background color when the DOM is finished loading.
$(document).ready(function() {
  // Runs when the DOM is finished loading.
  $("body").css("background", "#ccc");
});
```

```js
// Vanilla JS Example - Change the body background color when the DOM is finished loading.
function changeBackground(color) {
  document.body.style.background = color;
}

window.onload = changeBackground("red");
```

For more information regarding the `window.onload` event, please see the [MDN Documentation: GlobalEventHandlers.onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload).

jQuery lets you easily select elements from the DOM and make changes to them, including showing or hiding them. jQuery also lets you easily make AJAX requests to your server posting or receiving data.

## Challenges (60 Minutes)

1. **Hiding Login/Signup Links** - Here is a pseudocode plan in plain English for how to hide your login and signup links when a user is logged in. Try to implement it with jQuery.
    ```bash
    If login/signup is successful, hide all HTML elements with the class `.unauthenticated` and show all HTML elements with the class `.authenticated`.
    ```
1. **Flashing** - are your elements flashing on the screen and then disappearing? That might be because the DOM loads before the hide and show functions run. What can you change to solve this flash?
1. **Admin** - Can you add an "admin" attribute your token, and if a logged in user is an admin, show an link to `/admin` in your navbar?
1. **Security** - Showing and hiding in jQuery only change the `display` css attribute from `visible` to `hidden`. Is this secure? Couldn't a malicious developer just look at the DOM in their browser web tools and see the link? Or someone could just navigate to `/admin`. What can you do to protect this URL more so only people who are admin can navigate to this route.
1. **A Partial Solution** - For a partial solution to the above challenges, please look at this repository: [express-jwt-jquery](https://github.com/ajbraus/express-jwt-jquery). What are some things this implementation of express does differently than yours? Can you clone it and run it?

## BREAK (10 Minutes)

## API Project (25 Minutes)

Allow students to work on their [Custom API Project](../Projects/02-Custom-API-Project.md) for the remainder of the period.

## After Class

Continue to practice TDD by completing test cases for your custom API project.
