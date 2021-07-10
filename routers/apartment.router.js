const { Router } = require('express')
const { setApartment } = require('../controllers/apartment.controller')
const router = Router()

router.post('/', setApartment)

module.exports = router