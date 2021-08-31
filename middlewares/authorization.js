function authorization (req, res, next) {
    if (req.loggedInUser.role === "admin") {
        next()
    } else {
        res.status(401).json({message: "sorry, you are not authorized"})
    }
}

module.exports = authorization