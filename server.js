const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const { ObjectID } = require('mongodb');
const { body, validationResult } = require('express-validator');

const url = 'mongodb://127.0.0.1:27017/db_users'
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

const port = 8080;
const base = `${__dirname}/public`

//Database

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

app.post('/task', (req, res) => {
    const task = new Task({
        task:  body.task,
        taskTitle: body.taskTitle,
        taskDesc: body.taskDesc,
        taskDate: body.taskDate,
        value: body.value,
        workerDetails: body.workerDetails
    })

    task.save()
    .catch((err) => console.log(err));
    res.json(('saved to db ' + task));
    
})



//Application

app.use(express.static('public'));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

