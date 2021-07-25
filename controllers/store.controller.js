const Store = require("../models/store.model");

exports.addStore = async (req, res) => {
    try {
        const { property_type, add_type, rent_type, region, city,
            street_size, price, length, width, images,
            description } = req.body;
        const newStore = new Store({
            property_type, add_type, rent_type, region, city,
            street_size, price, length, width, images,
            description
        })
        const savedStore = await newStore.save();
        if (savedStore) {
            res.redirect('/')
        }
        return res.status(401).json({ message: "unauthorided user" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}