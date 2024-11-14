// build your `/api/resources` router here
// const resource_router = require('express').Router()
// const Resource = require('./model')

// resource_router.get('/', (req, res, next) => {
//     Resource.find()
//       .then(resources => {
//         res.json(resources)
//       })
//       .catch(next)
//   })

// resource_router.use('*', (req, res) => {
//     res.json({ api: 'up' })
// })

// resource_router.use((err, req, res, next) => {
//     res.status(500).json({
//         customMessage: 'something went wrong inside the resource router',
//         message: err.message,
//         stack: err.stack,
//     })
// })


// module.exports = resource_router