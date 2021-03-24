// bring in config file as db
const db = require("../data/config")

// make helper functions
// find projects
function find() {
    return db("projects");
}

// find by id
function findById(id) {
    return db("projects")
        .where("id", id)
        .first();
}

// add project
async function add(schema) {
    const id = await db
        .insert({
            name: schema.name,
            description: schema.description,
            completed: schema.completed
        })
        .into("projects");
    const newProject = await findById(id);
    return newProject;
}

// export helper functions
module.exports = {
    find,
    findById,
    add
}