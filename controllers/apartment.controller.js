// const express = require('express')
// const app = express()
// app.use(express.urlencoded());
const Apartment = require("../models/apartment.model");

exports.addApartment = async (req, res) => {
    console.log(req.body)
    try {
        const { property_type, add_type, rent_type, region, city,
            street_size, price, number_of_room, number_of_bathroom,
            number_of_kitchen, floor_number, has_equipe, images,
            description } = req.body;
        const newApartment = new Apartment({
            property_type, add_type, rent_type, region, city,
            street_size, price, number_of_room, number_of_bathroom,
            number_of_kitchen, floor_number, has_equipe, images,
            description
        })
        const savedApartment = await newApartment.save();
        if (savedApartment) {
            res.redirect('/')
        }
        return res.status(401).json({ message: "unauthorided user" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}