const { Router } = require('express')
const { createApartment } = require('../controllers/apartment.controller')
const router = Router()

router.post('/apartment', createApartment)


module.exports = router