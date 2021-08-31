const { Leasing } = require('../models/index')

class LeasingController {
    static list (req, res, next) {
        Leasing.findAll({})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
    static create (req, res, next) {
        const { name, logo } = req.body
        Leasing.create({ name, logo }, {
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
        Leasing.findOne({ where: { id: req.params.id }})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
    static edit (req, res, next) {
        const { name, logo } = req.body
        Leasing.update({ name, logo }, {
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
        Leasing.findOne({ where: { id: req.params.id }})
        .then((data) => {
            if(!data) {
                throw { status: "404", name: "Not Found" }
            } else {
                return Leasing.destroy({ where: { id: data.id }})
            }
        })
        .then(() => {
            res.status(200).json({ message: 'Tenor successfuly deleted' })
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
    }
}

module.exports = LeasingController