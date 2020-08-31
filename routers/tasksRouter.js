// bring in express and model
const express = require("express")

// define router
const router = express.Router()

// endpoints

// get all tasks
router.get("/", async (req, res, next) => {
    try {
        res.json({ message: "Hey there, this is tasks" })
    } catch (err) {
        next(err)
    }
})

// add task

// export router
module.exports = router