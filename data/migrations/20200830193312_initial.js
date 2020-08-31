exports.up = async function (knex) {
    // projects
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNullable()
        table.text("description")
        table.boolean("completed").notNullable().defaultTo("false")
    })

    // tasks
    await knex.schema.createTable("tasks", (table) => {
        table.increments("id")
        table.text("description").notNullable()
        table.text("notes")
        table.boolean("completed").notNullable().defaultTo("false")
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    // resources
    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name").notNullable().unique()
        table.text("description")
    })

    // projects_resources
    await knex.schema.createTable("projects_resources", (table) => {
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("resources")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.primary(["project_id", "resource_id"])
    })
}

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
}