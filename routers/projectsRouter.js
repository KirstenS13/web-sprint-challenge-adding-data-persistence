// bring in express and model
const express = require("express")
const Project = require("../models/project")

// define router
const router = express.Router()

// endpoints

// get all projects
router.get("/", async (req, res, next) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

// add project
router.post("/", async (req, res, next) => {
    try {
        console.log(req.body)
        const newProject = await Project.add(req.body)
        res.status(201).json(newProject)
        // if (newProject.length === 0) {
        //     next(err)
        // } else {
        //     res.status(201).json(newProject)
        // }
    } catch (err) {
        next(err)
    }
})

// export router
module.exports = router