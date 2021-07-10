const { Router } = require('express')
const { setApartment } = require('../controllers/apartment.controller')
const router = Router()
// you should create routes for all posible operations you will perform on Apparent  but this is a good start 
router.post('/', setApartment)

module.exports = router
