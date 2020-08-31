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
            completed: schema.completed,
            project_id: schema.project_id
        })
        .into("tasks");
    const newTask = await db("tasks as t")
        .where("t.id", id)
        .join("projects as p", "p.id", "t.project_id")
        .select("p.name as projectName", "p.description as projectDescription", "t.description as taskDescription", "t.notes as taskNotes", "t.completed", "t.id")
    console.log(newTask)
    return newTask;
}

// export helper functions
module.exports = {
    find,
    findById,
    add
}