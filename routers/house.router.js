const express = require('express');
const { addHouse, deleteHouse, updateHouse } = require('../controllers/house.controller');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('property/house', { title: 'Ajouter Maison' })
}
)
router.post('/', addHouse)
router.delete('/delete-house/:id', deleteHouse)
router.put('/update-house/:id', updateHouse)

module.exports = router