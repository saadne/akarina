const express = require('express');
const { addStore, deleteStore, updateStore } = require('../controllers/store.controller');
const Store = require('../models/store.model');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("property/store", { title: "Create House" })
})
router.post('/', addStore)

router.delete('/delete-store/:id', deleteStore)

router.get('/update-store/:id', async (req, res) => {
    try {
        const store = await Store.findOne({ where: { id: req.params.id } })
        res.render('property/editStore', { title: 'Ajouter Maison', store })
    } catch (error) {
        console.log(error)
    }

})
router.post('/update-store/:id', updateStore)

module.exports = router