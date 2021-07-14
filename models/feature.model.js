const { DataTypes } = require("sequelize");
const db = require("../config/db");
const House = require('./house.model')
const Apartment = require('./apartment.model')

const Feature = db.define("Feature", {
    number_of_room: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    number_of_bathroom: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    number_of_kitchen: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    has_equipe: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }

})


// House.hasMany(Feature, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// Apartment.hasMany(Feature, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

db.sync({ alter: true })

module.exports = Feature;

