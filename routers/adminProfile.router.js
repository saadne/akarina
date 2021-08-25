const express = require('express')
const { deleteUser, updateUser } = require('../controllers/adminProfile.controller')
const User = require('../models/user.model')
const Apartment = require('../models/apartment.model')
const House = require('../models/house.model')
const Land = require('../models/land.model')
const Store = require('../models/store.model')

const router = express.Router()

router.get('/admin-profile', async (req, res) => {
    const users = await User.findAll()
    res.render('admin/admin-profile', { title: "Admin profile", users })
})

router.get('/user-propertys/:id', async (req, res) => {
    try {
        const houses = await House.findAll({ where: { added_by: req.params.id } })
        const apartments = await Apartment.findAll({ where: { added_by: req.params.id } })
        const lands = await Land.findAll({ where: { added_by: req.params.id } })
        const stores = await Store.findAll({ where: { added_by: req.params.id } })
        res.render('admin/user-propertys', { title: "Les Proprietes pour l'utilisateur", apartments, houses, lands, stores })
    } catch (error) {
        console.log(error)
    }
})

router.post('/delete-user/:id', deleteUser)

router.get('/update-user/:id', async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.id } })
        res.render('authentication/editUser', { title: 'Modifier Utilisateur', user })
    } catch (error) {
        console.log(error)
    }

})
router.post('/update-user/:id', updateUser)



module.exports = router