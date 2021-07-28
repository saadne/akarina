const express = require('express')
const { addUser, loginUser } = require('../controllers/auth.controllers')
const router = express.Router()




router.get('/register', (req, res) => {
    res.render('auth/signup', { title: "Sign Up" })
})

router.post('/register', addUser)

router.get('/login', (req, res) => {
    res.render('auth/login', { title: "Login" })
})

router.post('/login', loginUser)

module.exports = router