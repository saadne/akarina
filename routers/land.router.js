const express = require('express');
const { addLand } = require('../controllers/land.controller');



const router = express.Router();


router.post('/', addLand)
router.get('/', (req, res) => {
    res.render("property/land", { title: "Create House" })
})


module.exports = router