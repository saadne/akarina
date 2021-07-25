const express = require('express');
const { addHouse } = require('../controllers/house.controller');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('property/house', { title: 'Ajouter Maison' })
}
)
router.post('/', addHouse)


module.exports = router