// bring in config file as db
const db = require("../data/config")

// make helper functions
// find projects
function find() {
    return db("tasks")
}

// add project
function add(newTask) {

}

// export helper functions
module.exports = {
    find,
    add
}