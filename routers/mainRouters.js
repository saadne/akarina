const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: "Home" })
})
router.get('/add', (req, res) => {
    res.render('add', { title: "Add Prperty" })
})

router.get('/signup', (req, res) => {
    res.render('signup', { title: "Sign Up" })
})

router.get('/login', (req, res) => {
    res.render('login', { title: "Login" })
})
router.get('/details', (req, res) => {
    res.render('details', { title: "Details" })
})


module.exports = router;