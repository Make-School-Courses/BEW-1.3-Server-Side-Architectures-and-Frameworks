# Day 6: Advanced Schema Design for Fun and Profit

## Minute-by-Minute

| **Elapsed** | **Time** | **Activity**               |
| ----------- | -------- | ---------------------------|
| 0:00        | 0:05     | Objectives                 |
| 0:05        | 0:15     | Initial Exercise           |
| 0:20        | 0:40     | TT: Slides / 2 Challenges  |
| 1:00        | 0:10     | BREAK                      |
| 1:10        | 0:30     | Activity: Continue API HW  |
| 1:40        | 0:15     | Wrap Up                    |
| TOTAL       | 1:55     |                            |

## Learning Objectives/Competencies (5 Minutes)

1. Review MongoDB schema basics at a high-level by generating examples of popular relationships as a group.
1. Gain the ability to articulate the most common relational database patterns at an introductory level.
1. Dive deeper into the common design considerations present when evaluating the effacacy of document based database schemas.
1. Understand the use of MongoDB and Mongoose techniques within RESTful APIs.

## Initial Exercise - Draw That DB Schema! (15 Minutes)

### Students Do: Activity (8 Minutes)

Before class, prepare the large whiteboard with a few hand-drawn schema diagrams for reference purposes. Additionally, randomly split students into three groups. Write them on the whiteboard.

Distribute mini-whiteboards, and instruct each group to discuss and draw one of each of the following...

1. (Group 1) As many examples of **One-to-One _(1:1)_** relationships as you can.
1. (Group 2) As many examples of **One-To-Many _(1:N)_** relationship as you can.
1. (Group 3) As many examples of **Many-to-Many _(N:N)_** relationship as you can.

Allow **7 minutes** for students to discuss and draw their assigned models.

### Everyone Do: Group Discussion (7 Minutes)

Once complete, **instruct students to hold up their whiteboards** in order to contrast and compare their examples with one another.

Bring the class back together and ask a few leading follow up questions:

1. _Which examples did you find most relatable?_
1. _Which schema do you think would be the most difficult to implement in the real world?_
1. _How would you decide which schema to choose?_

## Overview / TT: Schema Slides & Mini Challenges (30 Minutes)

### Topic 1: Data Modeling and Schema Design for Document DBs

#### Instructor Do: Slides (20 Minutes)

Present this [slide deck](https://www.slideshare.net/mongodb/jakes-schema-design-houston-mug-20150311) to the class as an overview.

### Topic 2: Schema Design Considerations

#### Students Do: Mini Challenge II (10 Minutes)

* Ask students to pair up.
* Instruct students to take a moment and individually read the following assigned paragraph(s):
    * [Read Ratio to Write Ratio](http://learnmongodbthehardway.com/schema/schemadesign/#read-ratio-to-write-ratio)
    * [Avoid Application Joins](http://learnmongodbthehardway.com/schema/schemadesign/#avoid-application-joins)
    * [Pre-aggregate Data](http://learnmongodbthehardway.com/schema/schemadesign/#preaggregate-data) and [Pre-allocated Documents (MMAP)](http://learnmongodbthehardway.com/schema/schemadesign/#preallocated-documents-mmap)
    * [Avoid Growing Documents (MMAP)](http://learnmongodbthehardway.com/schema/schemadesign/#avoid-growing-documents-mmap) and [Avoid Updating Whole Documents (MMAP)](http://learnmongodbthehardway.com/schema/schemadesign/#avoid-updating-whole-documents-mmap)
    * [Field Names Take up Space (MMAP)](http://learnmongodbthehardway.com/schema/schemadesign/#field-names-take-up-space-mmap)
    * [Over Eager Indexing](http://learnmongodbthehardway.com/schema/schemadesign/#over-eager-indexing) and [Covered Indexes](http://learnmongodbthehardway.com/schema/schemadesign/#covered-indexes)
    * [Custom _id Field](http://learnmongodbthehardway.com/schema/schemadesign/#custom-id-field)

* After reading, discuss with your partner.
* **Challenge**: Can you simplify the concept in your own words? Strive for two to three sentences that enhance understanding of what we should look out for when implementing a MongoDB database. Slack out your responses in the `#bew1-2` channel when complete.

### Topic 3: CRUD? REST? DBs? TLDR PLZ!

#### Students Do: Mini Challenge III: Acroynm Glue (10 Minutes)

Display the following table on the projector. Ask students to **fill in the blanks** below for each row.

| **URL**             | **CRUD** | **HTTP**    | **SQL**  | **MongoDB**                  | **Mongoose**                  |
| ------------------- | -------- | ----------- |--------- | ---------------------------- | ----------------------------- |
| `/theater/:id`      |          |             | `SELECT` |                              | `Theater.find({})`            |
| `/theater/new`      | `POST`   | `INSERT`    |          | `db.theaters.insert()`       |                               |
| `/theater/:id/edit` |          | `PUT`       | `UPDATE` |                              |                               |
| `/theater/:id`      | `DELETE` |             | `DELETE` |                              |                               |

## BREAK (10 Minutes)

## In Class Activity I: Theater Reservations API Continued (30 Minutes)

Continue working on the Theater Reservations API that was assigned last class period.

Remind students that this time is ideal for consulting with peers or asking in depth questions of the instructor.

Be sure to offer students a mini code review.

## Wrap Up (15 Minutes)

### Instructor Do: Setup (0-3 Minutes)

**NOTE**: Try to complete this during activity time to ensure a smooth transition.

* Before wrapping up class, set up Poll Everywhere.
* Ensure students can submit anonymous feedback.
* Make the poll live.
* Write the poll's URL on the whiteboard: make.sc/dani-poll
* Project the live results of poll submission.

### Students Do: Poll Everywhere (8 Minutes)

You've been delegated a new task at work. Your mission? Teach the latest group of incoming junior programmers the advanced MongoDB concepts required on the job. You have four hours to accomplish this task. How would you approach the mission?

### Everyone Do: Discuss Results as a Class (7 Minutes)

After 8 minutes have passed, project the anonymous results on the screen. Utilize the remainder of the class period to candidly and openly discuss each feedback item as they fade in.

## After Class

Continue work on both the Reddit Tutorial and the Theater Reservations API project. **Both are due the next day we meet at 11:59pm!**

## Additional Resources

1. [Database Trends for Modern Applications: Why the Database You Choose Matters](https://www.slideshare.net/mongodb/database-trends-for-modern-applications-why-the-database-you-choose-matters)
1. [Learn MongoDB the Hard Way: Schema Design](http://learnmongodbthehardway.com/schema/schemadesign/)
1. [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
1. [MongoDB Shell Methods: Collection Methods](https://docs.mongodb.com/manual/reference/method/js-collection/)
1. [Mongoose: Models](https://mongoosejs.com/docs/models.html)
1. [The MongoDB Engineering Journal](https://engineering.mongodb.com)
