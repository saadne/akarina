
// const express = require('express')
// const app = express()
// app.use(express.urlencoded());
const House = require("../models/house.model");



exports.addHouse = async (req, res) => {
    try {
        const { property_type, add_type, rent_type, region, city,
            street_size, price, images, number_of_room, number_of_bathroom,
            number_of_floors, number_of_kitchen, has_car_park, has_furniture,
            description } = req.body;
        const newHouse = new House({
            property_type, add_type, rent_type, region, city, street_size, price,
            number_of_room, number_of_bathroom, number_of_kitchen,
            has_car_park, number_of_floors, has_furniture, images, description
        })
        const savedHouse = await newHouse.save();
        if (savedHouse) {
            return res.redirect('/')
        }
        return res.status(401).json({ message: "unauthorided user" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

