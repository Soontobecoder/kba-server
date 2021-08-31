const router = require('express').Router()
const user = require('./user')
const product = require('./product')
const banner = require('./banner')
const bannerProduct = require('./bannerProduct')
const leasing = require('./leasing')
const tenor = require('./tenor')
const productImages = require('./productImages')

router.use('/', user)
router.use('/products', product)
router.use('/leasing', leasing)
router.use('/tenor', tenor)
router.use('/banner', banner)
router.use('/bannerProduct', bannerProduct)
router.use('/productImages', productImages)

module.exports = router