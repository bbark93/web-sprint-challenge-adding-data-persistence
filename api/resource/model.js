// build your `Resource` model here
const db = require('../../data/dbConfig.js')

async function getResources() {
    const resourceRows = await db('resources as r')

    return resourceRows
}

function addResources(resource) {
    return db("resources")
      .insert(resource)
      .then(([id]) => {
        return db("resources").where("resource_id", id).first();
      });
  }

module.exports = { 
    getResources,
    addResources
 }