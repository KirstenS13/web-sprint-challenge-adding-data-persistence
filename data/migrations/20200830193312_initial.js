exports.up = async function(knex) {
    // projects
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNullable()
        table.text("description")
        table.boolean("completed").notNullable().defaultTo(false)
    })

    // tasks
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description").notNullable()
        table.text("notes")
        table.boolean("completed").notNullable().defaultTo(false)
    })

    // resources
    

    // projects_resources
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
}