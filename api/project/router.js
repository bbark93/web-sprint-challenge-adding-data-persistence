// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
      .then(projects => {
        let num = 0;
        projects.map( p => {
          if (p.project_completed == 0) projects[num].project_completed = false;
          if (p.project_completed == 1) projects[num].project_completed = true;
          // console.log('p.project_completed: ',p.project_completed);
          // console.log(`projects[${num}].project_completed: `,projects[num].project_completed);
          num++;
        } )
        res.json(projects)
      })
      .catch(next)
  })

// router.post('/', (req, res, next))

router.use('*', (req, res) => {
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router