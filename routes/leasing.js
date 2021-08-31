const router = require('express').Router()
const LeasingController = require('../controllers/leasingController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', LeasingController.list)
router.get('/:id', LeasingController.findOne)
router.use(authentication)
router.post('/', authorization, LeasingController.create)
router.put('/:id', authorization, LeasingController.edit)
router.delete('/:id', authorization, LeasingController.delete)

module.exports = router