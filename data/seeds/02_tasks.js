
exports.seed = async function (knex) {
  await knex("tasks").insert([
    { project_id: 1, description: "Make food", notes: "wash hands first", completed: false },
    { project_id: 2, description: "write out plan on computer", notes: "make sure to be detailed", completed: false },
  ])
}
