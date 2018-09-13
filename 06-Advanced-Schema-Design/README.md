# Day 6: Advanced Schema Design for Fun and Profit

## Minute-by-Minute

| **Elapsed** | **Time** | **Activity**               |
| ----------- | -------- | ---------------------------|
| 0:00        | 0:05     | Objectives                 |
| 0:05        | 0:20     | Initial Exercise           |
| 0:25        | 0:30     | Overview / TT / Challenges |
| 0:55        | 0:10     | BREAK                      |
| 1:05        | 0:40     | Activity: Continue API HW  |
| 1:45        | 0:15     | Wrap Up                    |
| TOTAL       | 2:00     |                            |

## Learning Objectives/Competencies (5 Minutes)

1. Review MongoDB schema basics at a high-level by generating examples of popular relationships.
2.

## Initial Exercise - Draw That DB Schema! (15 Minutes)

### Students Do: Activity

Before class, prepare the large whiteboard with a few hand-drawn schema diagrams for reference purposes. Additionally, randomly split students into three groups. Write them on the whiteboard.

Distribute mini-whiteboards, and instruct each group to discuss and draw one of each of the following...

1. (Group 1) As many examples of **One-to-One _(1:1)_** relationships as you can.
1. (Group 2) As many examples of **One-To-Many _(1:N)_** relationship as you can.
1. (Group 3) As many examples of **Many-to-Many _(N:N)_** relationship as you can.

Allow **7 minutes** for students to discuss and draw their assigned models.

### Everyone Do: Group Discussion

Once complete, **instruct students to hold up their whiteboards in order to contrast and compare their examples with one another.

Bring the class back together and ask a few leading follow up questions:

1. _Which examples did you find most relatable?_
1. _Which schema do you think would be the most difficult to implement in the real world?_
1. _How would you decide which schema to choose?_

## Overview / TT: Schema Slides & Mini Challenges (30 Minutes)

### Topic 1

#### Instructor Do: Slides 1-5 (5 Minutes)

#### Students Do: Mini Challenge I (5 Minutes)

### Topic 2

#### Instructor Do: Slides 5-10 (5 Minutes)

#### Students Do: Mini Challenge II (5 Minutes)

### Topic 3: CRUD? REST? DBs? TLDR PLZ!

#### Instructor Do: Slides 10-15 (5 Minutes)

#### Students Do: Mini Challenge III: Acroynm Glue (5 Minutes)

Display the following table on the projector. Ask students to **fill in the blanks** below for each row.

| **URL**             | **CRUD** | **HTTP**    | **SQL**  | **MongoDB**                  | **Mongoose**                  |
| ------------------- | -------- | ----------- |--------- | ---------------------------- | ----------------------------- |
| `/theater/:id`      |          |             | `SELECT` |                              | `Theater.find({})`            |
| `/theater/new`      | `POST`   | `INSERT`    |          | `db.theaters.insert()`       |                               |
| `/theater/:id/edit` |          | `PUT`       | `UPDATE` |                              |                               |
| `/theater/:id`      | `DELETE` |             | `DELETE` |                              |                               |

## BREAK (10 Minutes)

## In Class Activity I: Theater Reservations API Continued (40 Minutes)

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

Continue work on the Reddit Tutorial. It's due next class!

## Additional Resources

1. [Learn MongoDB the Hard Way: Schema Design](http://learnmongodbthehardway.com/schema/schemadesign/)
1. [Learn MongoDB the Hard Way: MMAP Storage Engine](http://learnmongodbthehardway.com/schema/mmap.mmark/)
1. [Learn MongoDB the Hard Way: WiredTiger Storage Engine](http://learnmongodbthehardway.com/schema/wiredtiger/)
