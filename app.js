require("dotenv").config()
const express = require('express')
const app = express()
var expressValidator = require('express-validator');
const bodyParser = require('body-parser')
const db = require("./config/db")
const cookieParser = require('cookie-parser')
const path = require('path')
const { requireAuth, checkAuth, requireAuthAdmin } = require("./middleware/authMiddleware")


app.use(express.json());
app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));
app.set('view engine', 'ejs')
app.use(cookieParser())

// main routers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('*', checkAuth)
app.use('/', require('./routers/mainRouters'));
app.use('/auth', require('./routers/auth.router'));
app.use('/profile', requireAuth, require('./routers/profile.router'));
app.use('/houses', requireAuth, require('./routers/house.router'))
app.use('/apartments', requireAuth, require('./routers/apartment.router'));
app.use('/lands', requireAuth, require('./routers/land.router'))
app.use('/stores', requireAuth, require('./routers/store.router'));
app.use('/admin', requireAuthAdmin, require('./routers/adminProfile.router'));


app.use(checkAuth, (req, res) => {
    res.status(404).render('404', { title: "404" })
})


// server connection
app.listen(5000, async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(` app listning on port: ${5000} `)
})



