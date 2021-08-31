const { Tenor } = require('../models/index')

class TenorController {
    static list (req, res, next) {
        Tenor.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
    static add (req, res, next) {
        const { tenor, ProductId, price, dpStart, dpEnd, discount } = req.body
        Tenor.create({ tenor, ProductId, price, dpStart, dpEnd, discount }, {
            returning: true
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
    static findOne (req, res, next) {
        Tenor.findOne({where :{id: req.params.id}}, {returning: true})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            next(err)
        })
    }
    static edit (req, res, next) {
        const { tenor, ProductId, price, dpStart, dpEnd, discount } = req.body
        Tenor.update({
            tenor, ProductId, price, dpStart, dpEnd, discount
        }, {
            where: {
                id: req.params.id
            }, returning: true
        })
        .then(data => {
            res.status(200).json(data[1])
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
    static delete (req, res, next) {
        Tenor.findOne({ where: {id: req.params.id }})
        .then((data) => {
            if (!data) {
                throw { status: 404, name: 'NotFound'}
            } else {
                return Tenor.destroy({ where: { id: data.id }})
            }
        })
        .then(() => {
            res.status(200).json({ message: 'Tenor successfully deleted' })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = TenorController