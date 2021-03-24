
exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      name: "Deliver food to customers",
      description: "Make food and drive it to customer's house",
      completed: false
    },
    {
      name: "Take over the world",
      description: "Become the supreme ruler of the Earth",
      completed: false
    }
  ])
}
