const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models/index")

async function authentication (req, res, next) {
    const { access_token } = req.headers
    try {
        if (!access_token) {
            throw {name: "Authentication Failed", status: 401}
        } else {
            const decoded = verifyToken(access_token)
            const user = await User.findOne({
                where: { userName: decoded.userName }
            })
            console.log(user)
            if (!user) {
                throw { name: 'Authentication Failed', status: 401 }
            } else {
                req.loggedInUser = user
                next()
            }
        }
    } catch (err) {
        next (err)
    }
}

module.exports = authentication