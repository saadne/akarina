const multer = require("multer");
const path = require('path')
const House = require("../models/house.model");

// const storage = multer.diskStorage({
//     destination: '/uploads/',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// })
// const upload = multer({
//     storage
// }).single('images')
// upload(req, res, (err) => {
//     if (err) {
//         res.send("Something went wrong!");
//     } else {
//         res.send("File uploaded sucessfully!.");
//     }
// });

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

exports.deleteHouse = async (req, res) => {
    try {
        const { id } = req.params;
        await House.destroy({
            where: {
                id
            }
        });
        return res.status(201).json({ message: "House deleted successfuly" })

    } catch (error) {
        return res.status(401).json({ message: "You are unauthorized to delete" })
    }
}

exports.updateHouse = async (req, res) => {
    try {
        const { id } = req.params
        const { property_type, add_type, rent_type, region, city,
            street_size, price, images, number_of_room, number_of_bathroom,
            number_of_floors, number_of_kitchen, has_car_park, has_furniture,
            description } = req.body;
        const houseToUpdate = await House.findByPk(id);
        if (!houseToUpdate) {
            return res.status(400).json({ message: "Bad request" })
        }
        houseToUpdate.property_type = property_type || houseToUpdate.property_type
        houseToUpdate.add_type = add_type || houseToUpdate.add_type
        houseToUpdate.rent_type = rent_type || houseToUpdate.rent_type
        houseToUpdate.region = region || houseToUpdate.region
        houseToUpdate.city = city || houseToUpdate.city
        houseToUpdate.street_size = street_size || houseToUpdate.street_size;
        houseToUpdate.price = price || houseToUpdate.price;
        houseToUpdate.number_of_room = number_of_room || houseToUpdate.number_of_room;
        houseToUpdate.number_of_bathroom = number_of_bathroom || houseToUpdate.number_of_bathroom;
        houseToUpdate.number_of_kitchen = number_of_kitchen || houseToUpdate.number_of_kitchen;
        houseToUpdate.has_car_park = has_car_park || houseToUpdate.has_car_park;
        houseToUpdate.number_of_floors = number_of_floors || houseToUpdate.number_of_floors;
        houseToUpdate.has_furniture = has_furniture || houseToUpdate.has_furniture;
        houseToUpdate.images = images || houseToUpdate.images;
        houseToUpdate.description = description || houseToUpdate.description;
        const updatedHouse = await houseToUpdate.save()
        if (!updatedHouse) {
            return res.status(400).json({ message: "Bad request" })
        }
        const savedHouse = await House.save();
        return res.status(201).json({ savedHouse, message: "House was updated successfuly" })
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: "unauthorized" })

    }

}