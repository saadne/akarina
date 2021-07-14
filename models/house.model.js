const { DataTypes } = require("sequelize");
const db = require("../config/db");


const House = db.define("House", {

    has_car_park: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    nombre_detage: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
db.sync({ alter: true })

module.exports = House;