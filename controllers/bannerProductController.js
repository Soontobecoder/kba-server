const { BannerProduct, Product } = require('../models/index')

class BannerProductController {
    static list (req, res, next) {
        BannerProduct.findAll({ where: 
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
        .then(product => {
            if (!product) {
                throw {name: 'Product not found', error: 404}
            } else {
                return BannerProduct.create({ image, ProductId })
            }
        })
        .then (data =>{
            console.log(data, 'ini sudah di update/ create')
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
        // BannerProduct.update({
        //     image
        // }, {
        //     where: {
        //         id: req.params.id
        //     }
        // })
        .then(product => {
            if (!product) {
                throw {name: 'Product not found', error: 404}
            } else {
                return BannerProduct.update({
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
            // console.log(err, "masuk ke error bro")
            next(err)
        })
    }
    static delete (req, res, next) {
        const { id } = req.params
        BannerProduct.destroy({where: {id}})
        .then(() => {
            res.status(200).json({message: 'successfully deleted product'})
        })
        .catch(err =>{
            next(err)
        })
    }
}

module.exports = BannerProductController