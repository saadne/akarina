require("dotenv").config()
const express = require('express')
const mainRouters = require('./routers/mainRouters')
// const { conn } = require('./config')
const PORT = process.env.APP_PORT || 3333
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "akarina"
});

app.post('/apartments', (req, res) => {
    // const data = new data(req.body)
    const { property_type, add_type, rent_type, region, city, surface, prix, image, description, nbr_chambre, nbr_toillet, has_equipe, nbr_cuisine, nbr_etage } = req.body
    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        const sql = "INSERT INTO property (property_type, add_type, rent_type, region, city, street_size,price,image,description,house_id,aparetment_id,land_id,store_id) VALUES('" + property_type + "', '" + add_type + "', '" + rent_type + "', '" + region + "', '" + city + "', '" + surface + "','" + prix + "','" + image + "','" + description + "' ,NULL ,'1', NULL ,NULL)";
        const sql1 = "INSERT INTO feature(number_of_room,number_of_bathroom ,number_of_kitchen,has_equipe,house_id,aparetment_id) VALUES('" + nbr_chambre + "','" + nbr_toillet + "','" + nbr_cuisine + "','" + has_equipe + "',NULL,'1')";
        const sql2 = "INSERT INTO aparetment(floor_number)VALUES('" + nbr_etage + "')";

        conn.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        conn.query(sql1, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
        conn.query(sql2, function (err, result) {
            if (err) throw err;
            console.log(result);
        });

        res.redirect('/')
    });

})

// main routers
app.use(mainRouters);

// house router
app.use("/api/houses", require('./routers/house.routes'))

// apartment router
app.post("/api/apartment", require('./routers/apartment.router'))

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.status(404).render('404', { title: "404" })
})

app.listen(PORT, () => {
    console.log(` app listning on port: ${PORT} `)
})

