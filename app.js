require("dotenv").config()
const express = require('express')
const app = express()
// const PORT = process.env.APP_PORT || 3333

const db = require("./config/db")

app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extends: true }));


// main routers
app.use('/', require('./routers/mainRouters'));
app.use('/houses', require('./routers/house.router'))
app.use('/apartments', require('./routers/apartment.router'));
app.use('/lands', require('./routers/land.router'))
app.use('/stores', require('./routers/store.router'));


// page does not exist
app.use((req, res) => {
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
    console.log(` app listning on port: ${3000} `)
})



