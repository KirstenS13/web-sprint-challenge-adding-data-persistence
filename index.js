// bring in express
const express = require("express")
const welcomeRouter = require("./routers/welcomeRouter")
const projectsRouter = require("./routers/projectsRouter")
const resourcesRouter = require("./routers/resourcesRouter")
const tasksRouter = require("./routers/tasksRouter")

// bring in routers

// define server and port
const server = express()
const port = process.env.PORT || 4000

// bring in middleware, routers, error middleware
server.use(express.json())

server.use(welcomeRouter)
server.use("/projects", projectsRouter)
server.use("/resources", resourcesRouter)
server.use("/tasks", tasksRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later",
    })
})

// start server
server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})