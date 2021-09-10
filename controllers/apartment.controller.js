// const express = require('express')
// const app = express()
// app.use(express.urlencoded());
const Apartment = require("../models/apartment.model");

exports.addApartment = async (req, res) => {
    console.log(req.body)
    try {
        const { property_type, add_type, rent_type, region, city,
            street_size, price, number_of_room, number_of_bathroom,
            number_of_kitchen, floor_number, has_equipe, image_name,
            description, added_by } = req.body;
        const newApartment = new Apartment({
            property_type, add_type, rent_type, region, city,
            street_size, price, number_of_room, number_of_bathroom,
            number_of_kitchen, floor_number, has_equipe, image_name,
            description, added_by
        })
        const savedApartment = await newApartment.save();
        if (savedApartment) {
            return res.redirect('/profile')
        }
        return res.status(401).json({ message: "unauthorided user" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

exports.deleteApartment = async (req, res) => {
    try {
        const { id } = req.params;
        await Apartment.destroy({
            where: {
                id
            }
        });
        res.json({ redirect: '/profile' })

    } catch (error) {
        return res.status(401).json({ message: "You are unauthorized to delete" })
    }
}

exports.updateApartment = async (req, res) => {
    try {
        const { id } = req.params.id
        const { property_type, add_type, rent_type, region, city,
            street_size, price, number_of_room, number_of_bathroom,
            number_of_kitchen, floor_number, has_equipe, image_name,
            description, added_by } = req.body;

        let apartmentEdited = await Apartment.findOne({ where: { id: req.params.id } })
        if (apartmentEdited) {
            apartmentEdited.property_type = property_type
            apartmentEdited.add_type = add_type
            apartmentEdited.rent_type = rent_type
            apartmentEdited.region = region
            apartmentEdited.city = city
            apartmentEdited.street_size = street_size
            apartmentEdited.price = price
            apartmentEdited.number_of_room = number_of_room
            apartmentEdited.number_of_bathroom = number_of_bathroom
            apartmentEdited.number_of_kitchen = number_of_kitchen
            apartmentEdited.floor_number = floor_number
            apartmentEdited.has_equipe = has_equipe
            apartmentEdited.image_name = image_name
            apartmentEdited.description = description
            apartmentEdited.added_by = added_by
            await apartmentEdited.save()
            return res.redirect(`/profile/apartment/details/${req.params.id}`)
        }
        return res.status(401).json({ message: "request error " })
    } catch (error) {
        res.send(error)
    }
}