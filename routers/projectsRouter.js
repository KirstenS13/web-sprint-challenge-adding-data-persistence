// bring in express and model
const express = require("express")

// define router
const router = express.Router()

// endpoints

// get all projects
router.get("/", async (req, res, next) => {
    try {
        res.json({ message: "Hey there, this is projects" })
    } catch (err) {
        next(err)
    }
})

// add project

// export router
module.exports = router