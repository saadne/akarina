const Land = require("../models/land.model");

exports.addLand = async (req, res) => {
    try {

        const { property_type, add_type, rent_type, region, city,
            street_size, price, length, width, is_title, papier, images,
            description } = req.body;
        const newLand = new Land({
            property_type, add_type, rent_type, region, city,
            street_size, price, length, width, is_title, papier, images,
            description
        })
        const savedLand = await newLand.save();
        if (savedLand) {
            res.redirect('/')
        }
        return res.status(401).json({ message: "unauthorided user" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
exports.deleteLand = async (req, res) => {
    try {
        const { id } = req.params;
        await Land.destroy({
            where: {
                id
            }
        });
        return res.status(201).json({ message: "Land deleted successfuly" })

    } catch (error) {
        return res.status(401).json({ message: "You are unauthorized to delete" })
    }
}