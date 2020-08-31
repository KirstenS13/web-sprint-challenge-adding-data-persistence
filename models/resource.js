// bring in config file as db
const db = require("../data/config")

// make helper functions
// find projects
function find() {
    return db("resources")
}

// add project
function add(newResource) {

}

// export helper functions
module.exports = {
    find,
    add
}