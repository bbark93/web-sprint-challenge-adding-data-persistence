// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.find()
      .then(projects => {
        res.json(projects)
      })
      .catch(next)
  })

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