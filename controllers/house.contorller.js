const House = require("../models/house.model")
const Apartment = require('../models/apartment.model')
const Land = require('../models/land.model')
const Store = require('../models/store.model')
const Property = require("../models/property.model")
const Feature = require("../models/feature.model")
const express = require('express')
const app = express()
app.use(express.urlencoded());

exports.createHouse = async (req, res) => {
    // console.log(req.body)
    const { property_type, add_type, rent_type, region, city, surface, prix, images, description,
        avec_garage, nbr_etage, nbr_chambre, nbr_toillet, nbr_cuisine, has_equipe,
        numero_etage, length, width, is_title, papier } = req.body
    const house = {
        has_car_park: avec_garage,
        nombre_detage: nbr_etage,
    }
    const property = {
        property_type: property_type,
        add_type: add_type,
        rent_type: rent_type,
        region: region,
        city: city,
        surface: surface,
        prix: prix,
        images: images,
        description: description
    }
    const feature_house = {
        number_of_room: nbr_chambre[1],
        number_of_bathroom: nbr_toillet[1],
        number_of_kitchen: nbr_cuisine[1],
        has_equipe: has_equipe
    }
    const feature_apatment = {
        number_of_room: nbr_chambre[0],
        number_of_bathroom: nbr_toillet[0],
        number_of_kitchen: nbr_cuisine[0],
        has_equipe: has_equipe
    }
    const apartment = {
        floor_number: numero_etage
    }
    const land = {
        length: length[0],
        width: width[0],
        is_title: is_title,
        papier: papier
    }
    const store = {
        length: length[1],
        width: width[1]
    }
    if (property_type == "APPARTEMENT") {
        Property.create(property)
        Feature.create(feature_apatment)
        Apartment.create(apartment)
            .then(data => {
                res.redirect('/');
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });
    }
    else if (property_type == "TERRAIN") {
        Property.create(property)
        Land.create(land)
            .then(data => {
                res.redirect('/');;
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });
    }
    else if (property_type == "MAGAZIN") {
        Property.create(property)
        Store.create(store)
            .then(data => {
                res.redirect('/');
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });

    } else {
        Property.create(property)
        Feature.create(feature_house)
        House.create(house)
            .then(data => {
                res.redirect('/');;
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });
    }
}