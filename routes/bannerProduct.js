const router = require('express').Router()
const BannerProductController = require('../controllers/bannerProductController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', BannerProductController.list)
router.use(authentication)
router.post('/', authorization, BannerProductController.add)
router.put('/:id', authorization, BannerProductController.update)
router.delete('/:id', authorization, BannerProductController.delete)

module.exports = router