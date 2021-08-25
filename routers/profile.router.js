const express = require('express')

const Apartment = require('../models/apartment.model')
const House = require('../models/house.model')
const Land = require('../models/land.model')
const Store = require('../models/store.model')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const router = express.Router()

router.get('/', (req, res) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.send(err)
            } else {
                const user = await User.findByPk(decodedToken);
                try {
                    const houses = await House.findAll({ where: { added_by: user.id } })
                    const apartments = await Apartment.findAll({ where: { added_by: user.id } })
                    const lands = await Land.findAll({ where: { added_by: user.id } })
                    const stores = await Store.findAll({ where: { added_by: user.id } })
                    res.render('authentication/profile', { title: "Profile", apartments, houses, lands, stores })
                } catch (error) {
                    console.log(error)
                }
            }
        })
    } else {
        res.send(err)
    }
})
router.get('/house/details/:id', async (req, res) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.send(err)
            } else {
                const user = await User.findByPk(decodedToken);
                try {
                    let house = 0
                    if (user.role == "admin") {
                        house = await House.findOne({ where: { id: req.params.id } })
                    } else {
                        house = await House.findOne({ where: { added_by: user.id, id: req.params.id } })
                    }
                    res.render('authentication/houseDetailsAuth', { title: "House Details", house })
                } catch (error) {
                    console.log(error)
                }
            }
        })
    } else {
        res.send(err)
    }
})
router.get('/apartment/details/:id', async (req, res) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.send(err)
            } else {
                const user = await User.findByPk(decodedToken);
                try {
                    let apartment = 0
                    if (user.role == "admin") {
                        apartment = await Apartment.findOne({ where: { id: req.params.id } })
                    } else {
                        apartment = await Apartment.findOne({ where: { added_by: user.id, id: req.params.id } })
                    }
                    res.render('authentication/apartmentDetailsAuth', { title: "Apartment Details", apartment })
                } catch (error) {
                    console.log(error)
                }
            }
        })
    } else {
        res.send(err)
    }
})
router.get('/land/details/:id', async (req, res) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.send(err)
            } else {
                const user = await User.findByPk(decodedToken);
                try {
                    let land = 0
                    if (user.role == "admin") {
                        land = await Land.findOne({ where: { added_by: user.id, id: req.params.id } })
                    } else {
                        land = await Land.findOne({ where: { added_by: user.id, id: req.params.id } })
                    }

                    res.render('authentication/landDetailsAuth', { title: "Land Details", land })
                } catch (error) {
                    console.log(error)
                }
            }
        })
    } else {
        res.send(err)
    }
})
router.get('/store/details/:id', async (req, res) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.send(err)
            } else {
                const user = await User.findByPk(decodedToken);
                try {
                    let store = 0
                    if (user.role == "admin") {
                        store = await House.findOne({ where: { added_by: user.id, id: req.params.id } })
                    } else {
                        store = await House.findOne({ where: { added_by: user.id, id: req.params.id } })
                    }

                    res.render('authentication/storeDetailsAuth', { title: "Store Details", store })
                } catch (error) {
                    console.log(error)
                }
            }
        })
    } else {
        res.send(err)
    }
})


module.exports = router