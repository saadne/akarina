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
        console.log(error)
    }
})
router.get('/search', async (req, res) => {
    const { property_type, add_type, city } = req.query
    if (property_type == "MAISON") {
        const houses = await House.findAll({
            where: {
                property_type: property_type,
                add_type: add_type,
                city: city
            }
        })
        res.render('search/house-search', { title: "Search Houses", houses })
    }
    else if (property_type == "APPARTEMENT") {
        const apartments = await Apartment.findAll({
            where: {
                property_type: property_type,
                add_type: add_type,
                city: city
            }
        })
        res.render('search/apartment-search', { title: "Search Appartementes", apartments })
    }
    else if (property_type == "TERRAIN") {
        const lands = await Land.findAll({
            where: {
                property_type: property_type,
                add_type: add_type,
                city: city
            }
        })
        res.render('search/land-search', { title: "Search Land", lands })
    }
    else {
        const stores = await Store.findAll({
            where: {
                property_type: property_type,
                add_type: add_type,
                city: city
            }
        })
        res.render('search/store-search', { title: "Search Store", stores })
    }

})

router.get('/house/details/:id', async (req, res) => {
    try {
        const house = await House.findOne({ where: { id: req.params.id } })
        res.render('property/houseDetails', { title: "House Details", house })
    } catch (error) {
        console.log(error)
    }
})
router.get('/apartment/details/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findOne({ where: { id: req.params.id } })
        res.render('property/apartmentDetails', { title: "Apartment Details", apartment })
    } catch (error) {
        console.log(error)
    }
})
router.get('/land/details/:id', async (req, res) => {
    try {
        const land = await Land.findOne({ where: { id: req.params.id } })
        res.render('property/landDetails', { title: "Land Details", land })
    } catch (error) {
        console.log(error)
    }
})
router.get('/store/details/:id', async (req, res) => {
    try {
        const store = await Store.findOne({ where: { id: req.params.id } })
        res.render('property/storeDetails', { title: "Store Details", store })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;