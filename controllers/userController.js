const { User } = require("../models/index")
const { compare } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")

class UserController {
    static login (req, res, next) {
        const payload = {
            userName: req.body.userName,
            password: req.body.password,
            role: req.body.role || 'customer'
        }
        User.findOne (
            {
                where:
                {
                    userName: payload.userName
                }
            }
        ).then(data => {
            if (!data) {
                throw res.status(401).json({message: "sorry, wrong email / password"})
            } else if (!compare(payload.password, data.password)) {
                throw res.status(401).json({message: "sorry, wrong username / password"})
            } else {
                const access_token = signToken({
                    userName: data.userName,
                    id: data.id
                })
                res.status(200).json({access_token})
            }
        }).catch(err => {
            next(err)
        })
    }
    static register (req, res, next) {
        const payload = {
            userName: req.body.userName,
            password: req.body.password,
            role: req.body.role || 'customer'
        }
        User.create(payload)
        .then(data => {
            res.status(201).json({
                userName: data.userName,
                id: data.id
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController