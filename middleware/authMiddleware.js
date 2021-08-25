const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                res.redirect('/auth/login')
            } else {
                next()
            }
        })
    } else {
        res.redirect('/auth/login')
    }
}
const requireAuthAdmin = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            const user = await User.findByPk(decodedToken)
            if (user.role == 'admin') {
                if (err) {
                    res.redirect('/auth/login')
                } else {
                    next()
                }
            }

        })
    } else {
        res.redirect('/auth/login')
    }
}

const checkAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null
            } else {
                console.log(decodedToken)
                const user = await User.findByPk(decodedToken);
                res.locals.user = user
                next()
            }
        })
    } else {
        res.locals.user = null
        next()
    }
}



module.exports = { requireAuth, checkAuth, requireAuthAdmin }