const Router = require('express')
const router = new Router()
const serviceRouter = require('./serviceRouter')
const userRouter = require('./userRouter')
const interRouter = require('./interRouter')

router.use('/user', userRouter)
router.use('/service', serviceRouter)
router.use('/inter', interRouter)

module.exports = router