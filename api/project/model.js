// build your `Project` model here
const db = require('../../data/dbConfig.js')

async function getProjects() {
    const projectRows = await db('projects as p')

    return projectRows
}

module.exports = { getProjects }