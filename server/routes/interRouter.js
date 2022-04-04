const Router = require('express')
const router = new Router()
const interController = require('../controllers/interController')

router.post('/', interController.create)
router.get('/', interController.getAll)
router.delete('/', interController.getOne)
 
module.exports = router