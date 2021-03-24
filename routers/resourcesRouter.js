// bring in express and model
const express = require("express")
const Resource = require("../models/resource")

// define router
const router = express.Router()

// endpoints
// get all resources
router.get("/", async (req, res, next) => {
    try {
        const resources = await Resource.find()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

// add resource
router.post("/", async (req, res, next) => {
    try {
        const newResource = await Resource.add(req.body)
        res.status(201).json(newResource)
    } catch (err) {
        next(err)
    }
})

// export router
module.exports = router