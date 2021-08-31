const router = require('express').Router()
const TenorController = require('../controllers/tenorController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', TenorController.list)
router.get('/:id', TenorController.findOne)
router.use(authentication)
router.post('/', authorization, TenorController.add)
router.put('/:id', authorization, TenorController.edit)
router.delete('/:id', authorization, TenorController.delete)

module.exports = router