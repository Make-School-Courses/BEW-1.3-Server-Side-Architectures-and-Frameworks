# Deployment

<!-- omit in toc -->
## Agenda

1. [Learning Objectives (5 minutes)](#learning-objectives-%285-minutes%29)
1. [Warmup: Create a Study Guide (35 minutes)](#warmup%3A-create-a-study-guide-%2835-minutes%29)
1. [Activity: Deploy to Heroku! (45 minutes)](#activity%3A-deploy-to-heroku%21-%2845-minutes%29)
1. [BREAK (10 minutes)](#break-%2810-minutes%29)
1. [Surveys (15 minutes)](#surveys-%2815-minutes%29)
1. [Project Work Time (50 minutes)](#project-work-time-%2850-minutes%29)

## Learning Objectives (5 minutes)

By the end of this class, you should be able to:

1. Push your project to production using Heroku
1. Progress on your final project


## Warmup: Create a Study Guide (35 minutes)

In breakouts, create a study guide based on the questions found [here](https://make-school-courses.github.io/BEW-1.3-Server-Side-Architectures-and-Frameworks/#/Assessments/final-assessment).

**You can use your study guide on the assessment on Wednesday!**

## Activity: Deploy to Heroku! (45 minutes)

#### Set Up GitHub Repository

If you haven't yet, set up your GitHub repository for your API project:

```bash
git init
git add .
git commit -m 'Initial commit'
```

Make sure you create a file `.gitignore` and give it the following contents:

```bash
node_modules/
.env
```

If your `node_modules` folder was already added to your GitHub repository, make sure you remove it by running the following:

```bash
git rm -r node_modules
```

#### Create Procfile

In the root directory of your project, create a file called `Procfile` with the following contents:

```txt
web: node src/app.js
```

You may also need to add to your "scripts" in `package.json`:

```js
"scripts": {
  "start": "node src/app.js"
}
```

#### Push to Heroku

Create a Heroku app:

```bash
heroku create MY_APP_NAME_HERE
```

Add, commit, and push your files to GitHub as you normally would. Then, push to Heroku:

```bash
git push heroku master
heroku open
```

Take a look at the logs with:

```bash
heroku logs --tail
```


#### Add a Production Database

Run the following to add the `mLabs` add-on to your project:

```bash
heroku addons:create mongolab:sandbox
```

Then, add the following to your `server.js` file:

```js
const mongoose = require('mongoose')
const mongo_uri = process.env.MONGODB_URI
mongoose.connect(mongo_uri)
```

Make sure you have a key-value pair in your `.env` file for the `MONGODB_URI` environment variable (you may need to rename it if using starter code).

Also, make sure you are using the `PORT` environment variable in your server:

```js
const port = process.env.PORT
app.listen(port)
```

If you are using any other environment variables that will need to be defined on Heroku, such as the JWT secret key, you can set them as follows:

```txt
heroku config:set SECRET=myverysecretpassword
```

Add, commit, and push your files to Heroku, then run:

```txt
heroku open
```

If you still have errors, take a look at the logs and see if you can debug!

Woohoo! You're done!


## BREAK (10 minutes)

## Surveys (15 minutes)

Take some time to fill out the [class feedback survey](https://www.surveymonkey.com/r/VHVMLYF). We truly value your feedback so make sure to tell us of any suggestions, things you liked, didn't like, etc!

## Project Work Time (50 minutes)

Continue to work on your final project. Submit by Friday @ 11:59pm PST on Gradescope!
