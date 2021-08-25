const { DataTypes } = require("sequelize");
const db = require("../config/db");


const Apartment = db.define("apartment", {
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
    street_size: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
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
    floor_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    has_equipe: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    images: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    added_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})
db.sync({ alter: true })

module.exports = Apartment