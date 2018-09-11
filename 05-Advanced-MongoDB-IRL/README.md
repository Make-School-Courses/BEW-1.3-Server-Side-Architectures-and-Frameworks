# Day 5: Advanced Mongo Associations and Queries IRL

## Minute-by-Minute

| **Elapsed** | **Time** | **Activity**              |
| ----------- | -------- | ------------------------- |
| 0:00        | 0:05     | Objectives                |
| 0:05        | 0:05     | Overview                  |
| 0:10        | 0:40     | Activity: Write API       |
| 0:50        | 0:10     | BREAK                     |
| 0:60        | 0:50     | Activity: Integrate Mongo |
| TOTAL       | 1:50     |                           |

## Learning Objectives/Competencies (5 Minutes)

1. Practice RESTful and resourceful routing techniques by creating a Theater Reservations API in Express.js.
1. Implementing a complex MongoDB schema via a real-world walkthrough of a Theater Reservations system.
1. Understand and embrace the API development process by combining nested RESTful routes with JavaScript code that interacts with MongoDB.

## Overview / TT (5 Minutes)

Today's class focuses on the advanced implementation of MongoDB schemas in the context of real life applications.

We'll expand upon our collective knowledge by implementing an **entire Theater Reservations API in JavaScript, Express, and MongoDB**! This class focuses on the introduction of new and advanced techniques; we keep practicing those techniques daily in order to become strong backend engineers. That means you'll have to remember what we learned in [Day 3](../03-Nested-Routes-and-Resources) in order to accomplish this task!

## In Class Activity - Part 1: API Design (40 Minutes)

1. Create a **NEW public GitHub repo** to host your API.
1. Read through [Learn MongoDB the Hard Way: Theater Reservations](http://learnmongodbthehardway.com/schema/theater/). As you're reading, **make notes about what routes will be required in order to create your RESTful and resourceful Theater Reservations API**. 
    * (Optional) Stretch Challenge: Handling Expired Cards
1. **Pseudocode the routes** based on your notes.
1. **Compare routes** with the students around you.
1. Begin **stubbing out** your API in a file called `server.js`. You can **use the following code as an example**:

    ```JavaScript
    // server.js - Theater Reservation API

    var express = require('express');
    var router = express.Router();

    // Example stub:
    router.get('/theater/name-of-route', function(req, res) {
      res.json({'stub': `[${req.originalUrl}] Endpoint works! Replace me in Step 2.`});
    });

    module.exports = router;
    ```

1. **Test all your routes** and ensure they work as expected. After break, you'll be plugging in the required code to ensure your API can persist data!
1. **Add, commit, and push your code to GitHub** before break.

## BREAK (10 Minutes)

## In Class Activity - Part 2: Integrating MongoDB (50 Minutes)

1. Complete **each step** of the [Learn MongoDB the Hard Way: Theater Reservations](http://learnmongodbthehardway.com/schema/theater/) tutorial.
1. **Fill in the empty routes** created in Part 1 with the **relevant code** from **each step of the tutorial**.
1. **Test each your routes** and ensure they work as expected --- in other words, is the data persistant? Is the API working in the same way the tutorial describes?
1. **Add, commit, and push your code to GitHub** to complete the coding portion of the activity.
1. If you finish early, complete the API using the instructions below.

## After Class

Remind students that the completed Reddit Tutorial is due in one week!

### Complete Reservations API (Due: Thursday at 11:59PM)

1. Add a `README` to the repo. The `README` should have **at least three headers populated with details about the repository**. Please use the following template to get started:

    ```markdown
    # Dani's Theater API: Persisting Reservations via Express/MongoDB

    ## Purpose

    [**TODO**] Add description of the projects purpose.

    ## How to Use This API

    [**TODO**] List **each route individually** and one to two sentences describing the intention of each route. You MUST include practical examples of how to call each route!

    ## What I Learned

    [**TODO**] Add bullet points describing what you learned by implementing this project.
    ```

1. Slack out the repo link to the **bew1-2** channel and show off your work.

### Reddit Tutorial

Continue progress on the Reddit Tutorial if not yet complete.

## Additional Resources

1. [MDN: Express Tutorial - Routes and Controllers (Review)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
1. [Express.js - Production Best Practices: Performance and Reliability](https://expressjs.com/en/advanced/best-practice-performance.html)
1. [Learn MongoDB the Hard Way: Theater Reservations](http://learnmongodbthehardway.com/schema/theater/)
