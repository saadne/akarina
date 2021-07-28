const express = require('express');
const { addStore, deleteStore } = require('../controllers/store.controller')
const router = express.Router();

router.get('/', (req, res) => {
    res.render("property/store", { title: "Create House" })
})
router.post('/', addStore)

router.delete('/delete-store/:id', deleteStore)

module.exports = router