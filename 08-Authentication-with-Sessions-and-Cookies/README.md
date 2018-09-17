# Day 8: Authentication

Web security with cookies, tokens, and JWT.

## Minute-by-Minute

| **Elapsed** | **Time**  | **Activity**              |
| ----------  | --------- | ------------------------- |
| 0:00        | 0:05      | Objectives                |
| 0:05        | 0:20      | TT/Overview               |
| 0:25        | 0:10      | BREAK                     |
| 0:35        | 0:60      | Challenges                |
| 1:35        | 0:25      | API Project: Proposals    |
| TOTAL       | 2:00      |                           |


## Objectives (5 Minutes)

* Explain how a password can be store securely
* Explain and diagram the pattern of authentication that uses sessions and cookies
* Use `passport` to sign up and login to an application

## Overview (20 Minutes)

JSON Web Token (JWT) is a system for sharing and representing claims between
two parties.

In short using JWT your web sites can verify a user's authentication and
provide a token of that verification back. A user can then present the
token to verify their authentication without having to authenicate again.

### What is a JWT Token?

> 1. A thing serving as a visible or tangible representation of a fact,
> quality, feeling, etc.
> 2. A voucher that can be exchanged for goods or services.

A JWT token while intangible acts much to the defintion. It can be a
verifiable representation of the fact that a user has logged in.

The token itself is plain in this form:

`0000000000000.0000000000000000.0000000000000000`

A real token might look like this:

`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

It three parts each seprated with a `.`

Each part of the token is hashed:

> A hash function is any function that can be used to map data of arbitrary size to data of fixed size.

A hash function takes in data of any length and returns a string of a fixed length.

A hash function will always return unique value for any input.

The three parts of a JWT token contain:

- header - A JSON object describing the token it typically contains the hashing
algorithm used and the type: jwt
- payload - A JSON object with claims. This information the issuer has passed to
a client and expects to get back. In the Reddit example this contains the user
id. You can also add other infomation. Typical things might be issue date and
expiration date of the token.
- signature - The signature is a hash that contains the other token info and
a secret. The secret is an additional string that is unknown to the recipient
of the token.

### Why it Works

The token is verifiable. When the system issues a token it is only issuing
when it has authentication.

The signature is a hash of the payload along with a secret key. Hashing the
payload with out the secret key or hashing a different payload with the
secret will generate a different hash string that will not match the.

### The Secret of the Secret

The secret allows your server to verify that the token passed to a client
has not been modified.

Only the server knows the secret string.

### Are Hashes Unique?

Read [this article](https://www.theregister.co.uk/2017/02/23/google_first_sha1_collision/) for more.


## BREAK (10 Minutes)

## Challenges (60 Minutes)

1. Create a new node application that has secure signup, login, and encrypted password storage using `passport`.
    * You can use the [express-generator](https://expressjs.com/en/starter/generator.html) to generate a new express app more rapidly (watch out for Jade templates!). Use the `passport-local` [documentation](https://github.com/jaredhanson/passport-local) for guidance.
    * You might want to look at this complex [Scotch.io](https://scotch.io/tutorials/easy-node-authentication-setup-and-local) tutorial.

## Stretch Challenges

1. Add Facebook authentication.
1. Add Github authentication.

## After Class

Work on your proposal for the [Custom API Project](../Projects/02-Custom-API-Project.md).

## Additional Resources

1. [Passport.js](http://passportjs.org/)
1. [Your Node.js authentication tutorial is (probably) wrong](https://hackernoon.com/your-node-js-authentication-tutorial-is-wrong-f1a3bf831a46)
1. [Password Storage Cheat Sheet](https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet)
