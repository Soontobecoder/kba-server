const { Product, ProductImages, BannerProduct, Tenor } = require('../models/index')

class ProductController {
    static list (req, res, next) {
        Product.findAll({
            include: [{
                model: BannerProduct
            }, {
            //     model: Leasing,
            //     include: [{
            //         model: Tenor,
            //         where: { ProductId: 2 }, // gimana cara ngerefer ke Product.id di baris 5
            //     required: false }]
            // }]
                model: Tenor
            }, {
                model: ProductImages
            }]
        })
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            console.log(err)
            next(err)
        })
    }
    static add (req, res, next) {
        const {
            name,
            description,
            image,
            stock,
            price,
            tipeMesin,
            volumeLangkah,
            sistemSuplaiBahanBakar,
            diamterXLangkah,
            tipeTransmisi,
            rasioKompresi,
            dayaMaksimum,
            torsiMaksimum,
            tipeStarter,
            tipeKopling,
        } = req.body
        Product.create({
            name,
            description,
            image,
            stock,
            price,
            tipeMesin,
            volumeLangkah,
            sistemSuplaiBahanBakar,
            diamterXLangkah,
            tipeTransmisi,
            rasioKompresi,
            dayaMaksimum,
            torsiMaksimum,
            tipeStarter,
            tipeKopling,
        })
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            next(err)
        })
    }
    static edit (req, res, next) {
        const {
            name,
            description,
            image,
            price,
            stock,
            tipeMesin,
            volumeLangkah,
            sistemSuplaiBahanBakar,
            diamterXLangkah,
            tipeTransmisi,
            rasioKompresi,
            dayaMaksimum,
            torsiMaksimum,
            tipeStarter,
            tipeKopling,
        } = req.body
        Product.update({
            name,
            description,
            image,
            price,
            stock,
            tipeMesin,
            volumeLangkah,
            sistemSuplaiBahanBakar,
            diamterXLangkah,
            tipeTransmisi,
            rasioKompresi,
            dayaMaksimum,
            torsiMaksimum,
            tipeStarter,
            tipeKopling,
        }, {
            where: {
                id: req.params.id
            }, returning: true
        })
        .then(data => {
            res.status(200).json(data[1])
        })
        .catch(err => {
            // console.log(err, "masuk ke error bro")
            next(err)
        })
    }
    static findOne(req, res, next){
        Product.findOne(
            {
                where :{
                    id: req.params.id
                },
                include: [
                    {model: BannerProduct}, 
                    {model: Tenor},
                    {model: ProductImages}
                ], 
            }, {
                returning: true
            }
        )
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            next(err)
        })
    }
    static delete(req,res, next){
        Product.findOne({where:{id: req.params.id}})
        .then((data) => {
            if (data){
                return Product.destroy({where:{id: data.id}})
            }
            else {
                throw {status: 404, name: "NotFound"}
            }
        })
        .then(() => {
            res.status(200).json({message: "Product success to delete"})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ProductController