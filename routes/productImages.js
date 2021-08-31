const router = require('express').Router()
const ProductImagesController = require('../controllers/productImagesController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', ProductImagesController.list)
router.use(authentication)
router.post('/', authorization, ProductImagesController.add)
router.put('/:id', authorization, ProductImagesController.update)
router.delete('/:id', authorization, ProductImagesController.delete)

module.exports = router