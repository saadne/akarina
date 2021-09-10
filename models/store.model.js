const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Store = db.define("Store", {
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
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image_name: {
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

});
db.sync({ alter: true })

module.exports = Store;