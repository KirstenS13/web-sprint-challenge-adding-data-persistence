// bring in config file as db
const db = require("../data/config")

// make helper functions
// find projects
function find() {
    return db("projects")
}

// add project
function add(newProject) {

}

// export helper functions
module.exports = {
    find,
    add
}