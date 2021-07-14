const { DataTypes } = require("sequelize");
const db = require("../config/db");


const Apartment = db.define("Apartment", {
    floor_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})
db.sync({ alter: true })

module.exports = Apartment