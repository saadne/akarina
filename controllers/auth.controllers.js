const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const maxAge = 24 * 60 * 60;
const createToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET)
}
exports.addUser = async (req, res) => {
    const { phone, name, email } = req.body
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        let role = req.body.role
        if (role !== 'admin') {
            role = 'simple utilisateur'
        }
        let newUser = await new User({
            phone, name, email, role, password: hash
        })
        const user = await newUser.save()
        const token = createToken(user.id)
        if (user) {
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            if (user.role == "admin") {
                return res.redirect('/admin/admin-profile')
            }
            return res.status(200).redirect('/profile')
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.loginUser = async (req, res) => {
    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ where: { phone } });
        const match = await bcrypt.compare(password, user.password)
        const token = createToken(user.id)
        if (user && match) {
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
            if (user.role == "admin") {
                return res.redirect('/admin/admin-profile')
            }
            return res.status(200).redirect('/profile')
        }
        return res.status(401).json({ message: "phone or password incrrect" });

    } catch (error) {
        return res.status(401).json({ message: "bad request" });
    }
}

exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
}
