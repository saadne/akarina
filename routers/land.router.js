const express = require('express');
const { addLand, deleteLand, updateLand } = require('../controllers/land.controller');
const Land = require('../models/land.model');
const router = express.Router();

router.post('/', addLand)
router.get('/', (req, res) => {
    res.render("property/land", { title: "Create House" })
})
router.delete('/delete-land/:id', deleteLand)

router.get('/update-land/:id', async (req, res) => {
    try {
        const land = await Land.findOne({ where: { id: req.params.id } })
        res.render('property/editLand', { title: 'Ajouter Maison', land })
    } catch (error) {
        console.log(error)
    }

})
router.post('/update-land/:id', updateLand)

module.exports = router