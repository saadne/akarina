const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const House = require('../models/house.model');
const Apartment = require('../models/apartment.model');
const Land = require('../models/land.model');
const Store = require('../models/store.model');

exports.deleteUser = async (req, res) => {
    // const token = req.cookies.jwt
    // console.log(token)
    try {
        const user = User.findOne({ where: { id: req.body.user_id } })
        // const token = createToken(user.id)
        // jwt.destroy(token)
        await User.destroy({
            where: {
                id: req.body.user_id
            }
        });
        await House.destroy({
            where: {
                added_by: req.body.user_id
            }
        })
        await Apartment.destroy({
            where: {
                added_by: req.body.user_id
            }
        })
        await Land.destroy({
            where: {
                added_by: req.body.user_id
            }
        })
        await Store.destroy({
            where: {
                added_by: req.body.user_id
            }
        })
        return res.redirect('/admin/admin-profile')
    } catch (error) {
        return res.status(401).send({ message: "You are unauthorized to delete" })
    }
}
const createToken = (user) => {
    return jwt.sign(user, process.env.JWT_SECRET)
}

exports.updateUser = async (req, res) => {

    try {
        let userEdited = await User.findOne({ where: { id: req.params.id } })
        const hash = bcrypt.hashSync(req.body.password, 10);
        const token = createToken(userEdited.id)
        if (userEdited) {
            userEdited.name = req.body.name
            userEdited.phone = req.body.phone
            userEdited.email = req.body.email
            userEdited.role = req.body.role
            if (req.body.password == userEdited.password) {
                userEdited.password = userEdited.password
            } else {
                userEdited.password = hash
            }

            // const match = await bcrypt.compare(userEdited.password, req.body.password)
            // if (userEdited.changed('password')) {
            //     userEdited.password = hash
            // } else {
            //     userEdited.password = userEdited.password
            // }
            await userEdited.save()
            return res.redirect('/admin/admin-profile')
        }
    } catch (error) {
        res.send(error)
    }
}
