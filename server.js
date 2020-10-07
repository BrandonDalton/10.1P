const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const { ObjectID } = require('mongodb');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const url = 'mongodb://127.0.0.1:27017/task'
const app = express();
const Task = require("./Task");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
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
    const task = new Task(
      {
        task: req.body.task,
        taskTitle: req.body.taskTitle,
        taskDesc: req.body.taskDesc,
        taskDate: req.body.taskDate,
        value: req.body.value,
        workerDetails: req.body.workerDetails
    })

    task.save()
    .catch((err) => console.log(err));
    res.json(('saved to db ' + task));
    
})



//Application

app.use(express.static('public'));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

