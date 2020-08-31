
exports.seed = async function (knex) {
  await knex("resources").insert([
    { name: "computer", description: "laptop with high speed internet access" },
    { name: "delivery truck", description: "truck with compartment to keep food hot while delivering" }
  ])
};
