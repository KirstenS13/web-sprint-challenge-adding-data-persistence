// bring in config file as db
const db = require("../data/config")

// make helper functions
// find projects
function find() {
    return db("tasks")
}

// find by id
function findById(id) {
    return db("tasks")
        .where("id", id)
        .first()
}

// add project
async function add(schema) {
    const id = await db
        .insert({
            description: schema.description,
            notes: schema.notes,
            completed: schema.completed
        })
        .into("tasks");
    const newTask = await findById(id);
    return newTask;
}

// export helper functions
module.exports = {
    find,
    findById,
    add
}