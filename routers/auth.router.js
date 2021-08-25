const express = require('express')
const { addUser, loginUser, logout } = require('../controllers/auth.controllers')
// const { signUp, signIn } = require('../controllers/auth1.controller')
const router = express.Router()




router.get('/signup', (req, res) => {
    res.render('authentication/signup', { title: "Sign Up" })
})

router.post('/signup', addUser)
// router.post('/signup', signUp)

router.get('/login', (req, res) => {
    res.render('authentication/login', { title: "Login" })
})

router.post('/login', loginUser)
// router.post('/login', signIn)
router.get('/logout', logout)

module.exports = router