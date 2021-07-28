const { render } = require('ejs')
const express = require('express')
const Apartment = require('../models/apartment.model')
const House = require('../models/house.model')
const Land = require('../models/land.model')
const Store = require('../models/store.model')

const router = express.Router()

router.get('/', async (req, res) => {

    try {
        const houses = await House.findAll()
        const apartments = await Apartment.findAll()
        const lands = await Land.findAll()
        const stores = await Store.findAll()
        res.render('index', { title: "Home", apartments, houses, lands, stores })
    } catch (error) {

    }
})
router.get('/details', (req, res) => {
    res.render('details', { title: "Details" })
})

module.exports = router;