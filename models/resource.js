// bring in config file as db
const db = require("../data/config")

// make helper functions
// find projects
function find() {
    return db("resources")
}

// find by id
function findById(id) {
    return db("resources")
        .where("id", id)
        .first()
}

// add project
function add(schema) {

}

// export helper functions
module.exports = {
    find,
    findById,
    add
}