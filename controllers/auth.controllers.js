const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
exports.addUser = async (req, res) => {
    console.log(req.body)
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        let user = await User.create(
            Object.assign(req.body, { password: hash })
        );
        if (user) {
            return res.json(user);
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}
exports.loginUser = async (req, res) => {
    const generateAccessToken = (user) => jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "600s" })
    try {
        const { phone, password } = req.body;
        const user = await User.findOne({ where: { phone } });
        const match = await bcrypt.compare(password, user.password)
        const accessToken = generateAccessToken({ id: user.id, name: user.name, email: user.email, phone: user.phone });
        if (user && match) {
            return res.status(200).json({ id: user.id, name: user.name, email: user.email, phone: user.phone, accessToken, message: "loged in successfully" })
        }
        return res.status(401).json({ message: "phone or password incrrect" });

    } catch (error) {
        return res.status(401).json({ message: "bad request" });

    }

}
