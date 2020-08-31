// bring in express
const express = require("express")

// bring in routers

// define server and port
const server = express()
const port = process.env.PORT || 4000

// bring in middleware, routers, error middleware
server.use(express.json())

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