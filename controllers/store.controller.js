const Store = require("../models/store.model");

exports.addStore = async (req, res) => {
    try {
        const { property_type, add_type, rent_type, region, city,
            street_size, price, length, width, image_name,
            description, added_by } = req.body;
        const newStore = new Store({
            property_type, add_type, rent_type, region, city,
            street_size, price, length, width, image_name,
            description, added_by
        })
        const savedStore = await newStore.save();
        if (savedStore) {
            return res.redirect('/profile')
        }
        return res.status(401).json({ message: "unauthorided user" })

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

exports.deleteStore = async (req, res) => {
    try {
        const { id } = req.params;
        await Store.destroy({
            where: {
                id
            }
        });
        res.json({ redirect: '/profile' })

    } catch (error) {
        return res.status(401).json({ message: "You are unauthorized to delete" })
    }
}


exports.updateStore = async (req, res) => {
    try {
        const { id } = req.params.id
        const { property_type, add_type, rent_type, region, city,
            street_size, price, length, width, image_name,
            description, added_by } = req.body;

        let storeEdited = await Store.findOne({ where: { id: req.params.id } })
        if (storeEdited) {
            storeEdited.property_type = property_type
            storeEdited.add_type = add_type
            storeEdited.rent_type = rent_type
            storeEdited.region = region
            storeEdited.city = city
            storeEdited.street_size = street_size
            storeEdited.price = price
            storeEdited.length = length
            storeEdited.width = width
            storeEdited.image_name = image_name
            storeEdited.description = description
            storeEdited.added_by = added_by
            await storeEdited.save()
            return res.redirect(`/profile/store/details/${req.params.id}`)
        }
        return res.status(401).json({ message: "request error " })
    } catch (error) {
        res.send(error)
    }
}