const Land = require("../models/land.model");

exports.addLand = async (req, res) => {
    try {

        const { property_type, add_type, rent_type, region, city,
            street_size, price, length, width, is_title, papier, image_name,
            description, added_by } = req.body;
        const newLand = new Land({
            property_type, add_type, rent_type, region, city,
            street_size, price, length, width, is_title, papier, image_name,
            description, added_by
        })
        const savedLand = await newLand.save();
        if (savedLand) {
            return res.redirect('/profile')
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
        res.json({ redirect: '/profile' })
    } catch (error) {
        return res.status(401).json({ message: "You are unauthorized to delete" })
    }
}

exports.updateLand = async (req, res) => {
    try {
        const { id } = req.params.id
        const { property_type, add_type, rent_type, region, city,
            street_size, price, length, width, is_title, papier, image_name,
            description, added_by } = req.body;

        let landEdited = await Land.findOne({ where: { id: req.params.id } })
        if (landEdited) {
            landEdited.property_type = property_type
            landEdited.add_type = add_type
            landEdited.rent_type = rent_type
            landEdited.region = region
            landEdited.city = city
            landEdited.street_size = street_size
            landEdited.price = price
            landEdited.length = length
            landEdited.width = width
            landEdited.papier = papier
            landEdited.is_title = is_title
            landEdited.image_name = image_name
            landEdited.description = description
            landEdited.added_by = added_by
            await landEdited.save()
            return res.redirect(`/profile/land/details/${req.params.id}`)
        }
        return res.status(401).json({ message: "request error " })
    } catch (error) {
        res.send(error)
    }
}