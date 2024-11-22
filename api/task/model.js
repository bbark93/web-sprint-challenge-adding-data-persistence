// build your `Task` model here
const db = require("../../data/dbConfig.js");

async function getTasks() {
  const taskRows = await db("tasks as t")
    .leftJoin("projects as p", "p.project_name", "p.project_description")
    // .select()
    // .where("p.project_id")

  return taskRows;
}

module.exports = {
  getTasks,
  // addProjects,
};
