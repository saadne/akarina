const express = require('express');
const { addStore } = require('../controllers/store.controller')
const router = express.Router();

router.get('/', (req, res) => {
    res.render("property/store", { title: "Create House" })
})
router.post('/', addStore)


module.exports = router