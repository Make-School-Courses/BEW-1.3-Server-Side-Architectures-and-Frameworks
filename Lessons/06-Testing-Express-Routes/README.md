# Data Modeling with Mongoose

## Agenda

1. Learning Objectives [5 minutes]
1. Go over Tutorial [15 minutes]
1. Review: Nested Routes & Resources [30 minutes]
1. BREAK [10 minutes]
1. Model Relationships [30 minutes]
1. Activity: Design an API

## Learning Objectives

1. Use nested routes to create endpoints that are broken down into smaller parts and make sense to the user.
1. Use the `ObjectId` field type in Mongoose models to model relationships.
1. Design models to represent relationships between resources for a popular website.

## Go over tutorial & turn in [10 minutes]

Go to [Gradescope](https://gradescope.com) and turn in your work for Reddit.js part 1-3.

As a class, go over any questions about the tutorial so far.

## Review: Nested Routes & Resources [30 minutes]

Read [this article](https://medium.com/@zachcaceres/child-routers-in-express-56f904597b1b) and answer the following questions:

1. How can we use nested routes to break down categorical information into smaller parts?
1. How can we use the `.use()` function to re-route a request from one router to another?
1. If I visit the `/albums/1/track/2` URL, which middleware and route functions are called?

Go over an example of nested routes as a class.

## BREAK [10 minutes]

## Model Relationships [25 minutes]

### Think-Pair-Share: Relationships

Choose a popular website, list at least 3 resources, and describe their relationships. E.g. Facebook: `User` has-many `Posts`, `User` has-many friends (also `User`s), `Post` has-many `Like`s (represented by `User`s).

Share your example with a partner, and see if you agree. (Hint: There's not always one right answer!)

Then share a few examples with the class.

### TT: Model Relationships

We can model a one-to-many or many-to-many relationship using the `ObjectId` field type.

```js
const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: { type: String },
    releaseDate: { type: Date },
    songs: [ { type: mongoose.Schema.Types.ObjectId, ref: "Song" } ]
});
Album = mongoose.model("Album", albumSchema);

const songSchema = new mongoose.Schema({
    title: { type: String },
    duration: { type: Number },
    album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" }
});
Song = mongoose.model("Song", songSchema);
```

How does this schema design look different than ones we've seen in Django or Flask?


## Activity: Design an API

Go over the [API Project](Projects/02-Custom-API-Project.md) requirements and start writing your proposal. In particular, be clear about your data model and the relationships between objects.

Check out an example API project [here](https://github.com/jayceazua/custom-API-BEW1_2).

## Wrap-Up

Reminder: Midterm assessment on Monday. A [study guide](Assessments/midterm-assessment.md) is linked in the syllabus.

## Lab Time [45 minutes]

Use your lab time to continue working on the Reddit.js tutorial, start on your project proposal, or review material for the upcoming assessment.