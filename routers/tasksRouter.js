// bring in express and model
const express = require("express")
const Task = require("../models/task")

// define router
const router = express.Router()

// endpoints

// get all tasks
router.get("/", async (req, res, next) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

// add task
router.post("/", async (req, res, next) => {
    try {
        console.log(req.body)
        const newTask = await Task.add(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})

// export router
module.exports = router