const { render } = require('ejs')
const express = require('express')
const Apartment = require('../models/apartment.model')
const House = require('../models/house.model')
const Land = require('../models/land.model')
const Store = require('../models/store.model')

const router = express.Router()


router.get('/', async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = 4;
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    let lands = {}
    let stores = {}
    let apartments = {}
    let houses = {}

    try {
        const housesData = await House.findAll()
        if (endIndex < housesData.length) {
            houses.next = {
                page: page + 1,
            }
        }
        if (startIndex > 0) {
            houses.previous = {
                page: page - 1,
            }
        }
        houses.houses = housesData.slice(startIndex, endIndex)
        const apartmentsData = await Apartment.findAll()
        if (endIndex < apartmentsData.length) {
            apartments.next = {
                page: page + 1,
            }
        }
        if (startIndex > 0) {
            apartments.previous = {
                page: page - 1,
            }
        }
        apartments.apartments = apartmentsData.slice(startIndex, endIndex)

        const landsData = await Land.findAll();
        if (endIndex < landsData.length) {
            lands.next = {
                page: page + 1,
            }
        }
        if (startIndex > 0) {
            lands.previous = {
                page: page - 1,
            }
        }
        lands.lands = landsData.slice(startIndex, endIndex)
        const storesData = await Store.findAll()
        if (endIndex < storesData.length) {
            stores.next = {
                page: page + 1,
            }
        }
        if (startIndex > 0) {
            stores.previous = {
                page: page - 1,
            }
        }
        stores.stores = storesData.slice(startIndex, endIndex)
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