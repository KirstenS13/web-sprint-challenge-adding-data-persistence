// bring in express
const express = require("express")

// define router
const router = express.Router()

// endpoints
router.get("/", (req, res, next) => {
    res.json({
        message: "Welcome, I am the server."
    })
})

// export router
module.exports = router