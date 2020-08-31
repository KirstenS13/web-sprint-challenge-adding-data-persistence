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

// export router
module.exports = router