# Putting it Together

## Agenda

1. Learning Objectives
1. A Primer on Postman
1. Sample Project Demo
1. BREAK
1. Adding Authentication
1. Resources & Credits

## Learning Objectives

1. Use the Postman desktop program to send requests to an API, either on the web or on Localhost.
1. Complete a single route using a Document-Driven and Test-Driven approach.
1. Integrate JWT authentication into an existing API.

## Warm-Up

Form a group of 3-4. Check-in with each person on their Reddit.js tutorial progress. Then, answer the following questions:

1. What has been challenging about the tutorial so far?
1. What has been eye-opening to learn about how a website works?
1. What parts of the Reddit tutorial can you use to inform how to build your API project?

## A Primer on Postman

If you haven't yet, install [Postman](https://www.postman.com/downloads/) and watch as your instructor demonstrates its use with a locally served API.

## Sample Project Demo

Watch as your instructor demonstrates how to complete a mini-project according to the following steps. 

**Step 1**: Write your data models according to what data you will be storing.

**Step 2**: Write documentation for your API endpoints, describing how the user will interact with them (what are the inputs/outputs?). This is similar to the process of making wireframes in a non API project.

**Step 3**: Write a route for each of your API endpoints, according to the following steps:

1. Write a unit test for the endpoint that tests whether it gives the desired response. Run the test to see that it fails. (If it succeeds, you did something wrong!)
1. Write the code for the endpoint, and re-run the test.
1. Revise the test until it passes. Make sure you are testing that the route gives the correct data!
1. Write more unit tests for errors or edge cases.
1. Manually test your code with Postman to see if everything works from the user's perspective.

## BREAK

## Adding Authentication

Watch as your instructor adds authentication to an existing app.

In particular, you will want to add the following:

1. An endpoint for the user to sign up for an account, which should add a new User object to the database
1. An endpoint for the user to log in
1. A middleware function to determine if the user is logged in, and if so add their user info to the request object

## Wrap-Up

API project Phase 1 is due on Tuesday - must have at least 4 unit tests. Recommended to try using TDD, but alternately you can write the routes first followed by the tests. (Tests do not have to be passing for this submission.)

## Resources & Credits

1. [Mongoose Unit Tests using Chai](https://medium.com/nongaap/beginners-guide-to-writing-mongodb-mongoose-unit-tests-using-mocha-chai-ab5bdf3d3b1d)