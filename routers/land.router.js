const express = require('express');
const { addLand, deleteLand } = require('../controllers/land.controller');



const router = express.Router();


router.post('/', addLand)
router.get('/', (req, res) => {
    res.render("property/land", { title: "Create House" })
})
router.delete('/delete-land/:id', deleteLand)


module.exports = router