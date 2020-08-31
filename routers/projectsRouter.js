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

// export router
module.exports = router