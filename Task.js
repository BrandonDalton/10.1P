const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            trim: true
        },
        taskTitle: {
            type: String,
            trim: true
        },
        taskDesc: {
            type: String,
            trim: true
        },
        taskDate: {
            type: String
        },
        value: {
            type: String
        },
        workerDetails: {
            type: String
        }
    }
)

module.exports = mongoose.model("Task", taskSchema)
