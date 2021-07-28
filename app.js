require("dotenv").config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require("./config/db")
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));


// main routers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', require('./routers/mainRouters'));
app.use('/houses', require('./routers/house.router'))
app.use('/apartments', require('./routers/apartment.router'));
app.use('/lands', require('./routers/land.router'))
app.use('/stores', require('./routers/store.router'));
app.use('/auth', require('./routers/auth.router'));
// page does not exist
app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})
// server connection
app.listen(3000, async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(` app listning on port: ${3000} `)
})



