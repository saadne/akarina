const { DataTypes } = require("sequelize");
const db = require("../config/db");
const House = require('./house.model')
const Apartment = require('./apartment.model')
const Land = require('./land.model')
const Store = require('./house.model')

const Property = db.define("Property", {
    property_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    add_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rent_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surface: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    prix: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    images: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },


})
// House.hasMany(Property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// Apartment.hasMany(Property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// Store.hasMany(Property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
// Land.hasMany(Property, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });

db.sync({ alter: true })


module.exports = Property