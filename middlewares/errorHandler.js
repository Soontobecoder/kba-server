module.exports = function (err, req, res, next) {
    let status = err.status || 500
    console.log(err)
    let msg = err.name || "internal server error"
    if (msg === "SequelizeValidationError") {
        status = 400
        const error = err.errors
        msg = ''
        if (error.length > 1) {
            error.forEach(el => {
                msg += `${el.message}, `
            });
        } else if (error.length === 1) {
            msg = error[0].message
        }
    } else if (msg === "SequelizeUniqueConstraintError") {
        status = 400
        msg = 'username already exist'
    } else if (msg === 'Authentication Failed') {
        status = 401
        msg = "please login first"
    } else if (msg === 'NotFound') {
        status = 404
        msg = "sorry, no product was found"
    } else if (msg === "banner not found"){
        status = 404
        msg = "sorry, no banner was found"
    }
    res.status(status).json({message: msg})
}