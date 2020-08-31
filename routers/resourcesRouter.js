// bring in express and model
const express = require("express")

// define router
const router = express.Router()

// endpoints

// get all resources
router.get("/", async (req, res, next) => {
    try {
        res.json({ message: "Hey there, this is resources" })
    } catch (err) {
        next(err)
    }
})

// add resource

// export router
module.exports = router