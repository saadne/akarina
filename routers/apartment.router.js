const express = require('express');
const { addApartment } = require('../controllers/apartment.controller');


const router = express.Router();

router.get('/', (req, res) => {
    res.render("property/apartment", { title: "Ajouter Appartement" })
})
router.post('/', addApartment)
router.delete('/delete-apartment/:id')


module.exports = router