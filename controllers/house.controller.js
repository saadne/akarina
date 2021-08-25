const multer = require("multer");
const path = require('path')

const House = require("../models/house.model");
// const imageMiddleware = require('../middleware/imageMuddleware')
// var upload = multer({
//     storage: imageMiddleware.image.storage(),
//     allowedImage: imageMiddleware.image.allowedImage
// }).single('image');

// exports.test = upload
exports.addHouse = async (req, res) => {
    try {
        const { property_type, add_type, rent_type, region, city,
            street_size, price, number_of_room, number_of_bathroom,
            number_of_floors, number_of_kitchen, has_car_park, has_furniture, image_name,
            description, added_by } = req.body;
        const newHouse = await new House({
            property_type, add_type, rent_type, region, city, street_size, price,
            number_of_room, number_of_bathroom, number_of_kitchen,
            has_car_park, number_of_floors, has_furniture, image_name, description, added_by,
        })
        const savedHouse = await newHouse.save();
        if (savedHouse) {
            return res.redirect('/profile')
        }
        return res.status(401).json({ message: "unauthorided user" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

exports.deleteHouse = async (req, res) => {
    try {
        await House.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ redirect: '/profile' })
    } catch (error) {
        return res.status(401).send({ message: "You are unauthorized to delete" })
    }
}

exports.updateHouse = async (req, res) => {
    try {
        const { id } = req.params.id
        const { property_type, add_type, rent_type, region, city,
            street_size, price, images, number_of_room, number_of_bathroom,
            number_of_floors, number_of_kitchen, has_car_park, has_furniture,
            description, added_by } = req.body;

        let houseEdited = await House.findOne({ where: { id: req.params.id } })
        if (houseEdited) {
            houseEdited.property_type = property_type
            houseEdited.add_type = add_type
            houseEdited.rent_type = rent_type
            houseEdited.region = region
            houseEdited.city = city
            houseEdited.street_size = street_size
            houseEdited.price = price
            houseEdited.number_of_room = number_of_room
            houseEdited.number_of_bathroom = number_of_bathroom
            houseEdited.number_of_kitchen = number_of_kitchen
            houseEdited.has_car_park = has_car_park
            houseEdited.number_of_floors = number_of_floors
            houseEdited.has_furniture = has_furniture
            houseEdited.images = images
            houseEdited.description = description
            houseEdited.added_by = added_by
            await houseEdited.save()
            return res.redirect(`/profile/house/details/${req.params.id}`)
        }
        return res.status(401).json({ message: "request error " })
    } catch (error) {
        res.send(error)
    }
}

