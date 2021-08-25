const express = require('express');
const { addHouse, deleteHouse, updateHouse } = require('../controllers/house.controller');
const router = express.Router();
const House = require('../models/house.model')
const multer = require('multer')

router.get('/', (req, res) => {
    res.render('property/house', { title: 'Ajouter Maison' })
}
)
router.post('/', addHouse)

router.delete('/delete-house/:id', deleteHouse)

router.get('/update-house/:id', async (req, res) => {
    try {
        const house = await House.findOne({ where: { id: req.params.id } })

        res.render('property/editHouse', { title: 'Ajouter Maison', house })
    } catch (error) {
        console.log(error)
    }

})
router.post('/update-house/:id', updateHouse)

module.exports = router