# Databases Pt. 1

## Agenda

1. Learning Objectives
1. Activity: Tutorial Time (50 Minutes)
1. BREAK (10 Minutes)
1. Review: Databases using Mongoose (20 Minutes)
1. Activity: Create an Events app (30 Minutes)
1. Lab Time (45 Minutes)
1. Resources & Credits

## Learning Objectives

By the end of this class, students will be able to...

1. Use Mongoose models to represent data using a variety of types.
1. Use the `find`, `findOne`, etc. functions to query Mongoose objects.
1. Practice writing routes to return database objects.

## Activity: Tutorial Time (50 Minutes)

Use this time to get caught up on the Reddit.js tutorial (or keep going, if you have already finished Part 3). Your instructor will come around to assist!

In the last 20 minutes, go over the tutorial Parts 1-3 as a class and discuss.

## Databases using Mongoose (20 Minutes)

In this class, we will be using [Mongoose](https://mongoosejs.com/docs/models.html) models to represent our data.

Let's take a look at the syntax for creating models.

```js
const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    eventName: {type: 'string', required: true},
    dateTime: {type: 'Date', required: true},
});
var Event = mongoose.model('Event', eventSchema);
```

We can create a new Event object as follows:

```js
const myEvent = new Event({
  eventName: 'Make School Demo Night',
  dateTime: new Date(2020, 2, 6, 18, 30, 0) // Fri March 6, 2020 at 6:30PM
});

myEvent.save(); // Save to our Mongoose database
```

Filtering our models results in a `Promise`-like object which we will need to resolve:

```js
Event.findOne({ eventName: 'Make School Demo Night' })
    .then(demoNightEvent => {
        console.log(demoNightEvent);
    });
```

## Activity: Create an Events app (30 Minutes)

Create a new project in a folder called `events-js`. Run `npm init` to get a `package.json` file, and create a file `server.js`. For now, all of our code will go in the server file.

Install Express with `npm install express --save`, and add the following starter code:

```js
const express = require('express');
const app = express();

// Setup

// Models

// Routes

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

Now we should be able to run the server - but we don't have any routes yet!

Add some starter code for connecting with Mongoose. You'll have to run `npm install mongoose --save`.

```js
// Setup

/* Mongoose Connection */
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/reddit-db",
  { useNewUrlParser: true }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);
```

In a separate terminal, run `mongod` and leave it running in the background.

Now let's add a model for our events:

```js
// Models

const EventSchema = new mongoose.Schema({
  eventName: {type: 'string', required: true},
  date: {type: 'Date', required: true}
})

const Event = mongoose.model('Event', EventSchema);
```

Next, add some routes so that we can view and create events:

```js
app.get('/', (req, res) => {
  Event.find()
    .then(events => {
      res.send(events);
    }).catch(err => {
      console.log(err.message);
    });
  // render the greetings view, passing along the name
})

app.get('/create_form', (req, res) => {
  res.send(`
    <form action='create' method='post'>
      Event Name: <input type='text' name='eventName'>
      <br>Event Date: <input type='date' name='date'>
      <br><input type='submit' value='Submit!'>
    </form>
  `)
})

app.post('/create', (req, res) => {
  const event = new Event(req.body);
  event.save();
  res.send('event created');
})
```

If you run your code and try to add an event, you should see an error message: `ValidationError: Event validation failed: date: Path 'date' is required`. We will need to install the `body-parser` module so that we can use our form data.

Add the following code to your server, above the route code:

```js
// Setup

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```

Now your routes should be (semi-)complete! Complete the challenges below to get more practice with using models.

### Challenges

1. Make a "show" route that shows a single event. E.g., if I visit `/event/5e388ae`, I should see the corresponding info for the event with the `_id` field of `5e388ae`.
1. Show events on the main page in separate bullet points. You will need to use either a for loop, to construct the resulting HTML string, or templating.

### Stretch Challenges

1. Create an "update" route that shows a form to update a specific event. E.g. `/update/5e388ae` should show a form to update that specific event.
1. Create a "delete" route that deletes a specific event.

## Lab Time (45 Minutes)

Use the time provided to work on the Reddit.js tutorial Parts 4-5. This is your time, so please use it effectively!

Reminder that Reddit.js Part 1-3 will be due at the beginning of next class.

If you wish to leave early, please show your instructor that you have finished the tutorial thru Part 5.

## Resources & Credits

1. [Mongoose Models](https://mongoosejs.com/docs/models.html)
1. [Mongoose Queries](https://mongoosejs.com/docs/queries.html)
1. [Mongoose: Working with Dates](https://mongoosejs.com/docs/tutorials/dates.html)
1. [JavaScript Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
1. [Moment.js](https://momentjs.com/)