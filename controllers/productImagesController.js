const { ProductImages, Product } = require('../models/index')

class ProductImagesController {
    static list (req, res, next) {
        ProductImages.findAll({ where:
            {
                ProductId: Product.id
            },
            include: Product
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
    static add (req, res, next) {
        const { image, ProductId } = req.body
        Product.findByPk(ProductId)
        .then( product => {
            if (!product) {
                throw { name: 'Product not found', error: 404 }
            } else {
                return ProductImages.create({ image, ProductId })
            }
        })
        .then( data => {
            console.log(data, 'data berhasil di create')
            res.status(201).json(data)
        })
        .catch(err =>{
            console.log(err,'ternyata masuk error')
            next(err)
        })
    }
    static update (req, res, next) {
        const { image, ProductId } = req.body
        Product.findByPk(ProductId)
        .then( product => {
            if (!product) {
                throw { name: 'Product not found', error: 404 }
            } else {
                return ProductImages.update({
                    image
                }, {
                    where: {
                        id: req.params.id
                    }
                })
            }
        })
        .then(data => {
            res.status(200).json(data[1])
        })
        .catch(err => {
            next(err)
        })
    }
    static delete (req, res, next) {
        const { id } = req.params
        ProductImages.destroy({ where: { id } } )
        .then(() => {
            res.status(200).json({ message: 'successfully deleted image' })
        })
        .catch((err) => {
            next(err)
        })
    }
}

module.exports = ProductImagesController