# Day 8: Authentication

Web security with cookies, tokens, JWT, and `passport`.

## Minute-by-Minute

| **Elapsed** | **Time**  | **Activity**              |
| ----------  | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:20      | TT/Review                 |
| 0:25        | 0:10      | BREAK                     |
| 0:35        | 0:60      | Challenges                |
| 1:35        | 0:25      | API Project: Proposals    |
| TOTAL       | 2:00      |                           |


## Objectives (5 Minutes)

* Review and reflect on the Theater Reservations API project.
* Explain and diagram the pattern of authentication that uses sessions and cookies.
* Use `passport` to sign up and login to an application.

## Review Theater Reservations API Project (20 Minutes)

* Review Theater Reservations API project.

* Demonstrate examples of how to solve common issues live.

* Open the floor for Q&A time.

## BREAK (10 Minutes)

## Challenges (60 Minutes)

1. Create a new node application that has secure signup, login, and encrypted password storage using `passport`.
    * You can use the [express-generator](https://expressjs.com/en/starter/generator.html) to generate a new express app rapidly.
        * Use the `passport-local` [documentation](https://github.com/jaredhanson/passport-local) for guidance.
    * You could also use my [`api-auth-starterpack`](https://github.com/api-auth-starterpack) repository to create a new express app quickly.
    * You might want to look at this complex [Scotch.io](https://scotch.io/tutorials/easy-node-authentication-setup-and-local) tutorial.
1. Use the [GIPHY Capture Mac App](https://itunes.apple.com/us/app/giphy-capture-the-gif-maker/id668208984?mt=12) to capture a video of a successful signup and login on your local machine.
1. Challenge is complete when you have Slacked the `#bew1-2` channel your `.gif` demonstrating your working `passport` implementation!

## Stretch Challenges

1. Add Facebook authentication.
    * Slack a `.gif` of it working to the `#bew1-2` channel.
1. Add Github authentication.
    * Slack a `.gif` of it working to the `#bew1-2` channel.

## After Class

Work on your proposal for the [Custom API Project](../Projects/02-Custom-API-Project.md).

## Additional Resources

1. [Passport.js](http://passportjs.org/)
1. [Your Node.js authentication tutorial is (probably) wrong](https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46)
1. [Password Storage Cheat Sheet](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet)
