// build your `Project` model here
const db = require('../../data/dbConfig.js')

async function getProjects() {
    const projectRows = await db('projects as p')

    return projectRows
}

function addProjects(project) {
    return db("projects")
      .insert(project)
      .then(([id]) => {
        return db("projects").where("project_id", id).first();
      });
  }

module.exports = { 
    getProjects,
    addProjects
 }