const projects = [
    { project_name: 'Web API', project_description: 'Build APIs', project_completed: 0 },
    { project_name: 'Databases', project_description: 'Learn SQL', project_completed: 1 }
]

const resources = [
    { resource_name: 'keyboard' },
    { resource_name: 'computer', resource_description: 'Windows PC' }
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
}