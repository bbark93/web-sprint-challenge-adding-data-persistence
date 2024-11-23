// build your `Task` model here
const db = require("../../data/dbConfig.js");

async function getTasks() {
  const taskRows = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");

  return taskRows;
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks").where("task_id", id).first();
    });
}

module.exports = {
  getTasks,
  addTask,
};
