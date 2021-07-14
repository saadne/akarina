require("dotenv").config()
const express = require('express')
const mainRouters = require('./routers/mainRouters')
// const PORT = process.env.APP_PORT || 3333
const app = express()
// const bodyParser = require('body-parser')
var cors = require('cors')
const db = require("./config/db")
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.urlencoded());
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(mainRouters);
// house router
app.use("/houses", require('./routers/house.router'))

// // apartment router
app.use("/apartment", require('./routers/apartment.router'))

// // store router
app.use("/store", require('./routers/store.router'))

// // land router
app.use("/land", require('./routers/land.router'))

// main routers

// static configurtions
app.use(express.static(__dirname + '/public'));

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
    console.log(` app listning on port: ${5000} `)
})



