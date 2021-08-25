const express = require('express');
const { addApartment, updateApartment, deleteApartment } = require('../controllers/apartment.controller');
const Apartment = require('../models/apartment.model');


const router = express.Router();

router.get('/', (req, res) => {
    res.render("property/apartment", { title: "Ajouter Appartement" })
})
router.post('/', addApartment)
router.delete('/delete-apartment/:id', deleteApartment)

router.get('/update-apartment/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findOne({ where: { id: req.params.id } })
        res.render('property/editApartment', { title: 'Ajouter Maison', apartment })
    } catch (error) {
        console.log(error)
    }

})
router.post('/update-apartment/:id', updateApartment)

module.exports = router