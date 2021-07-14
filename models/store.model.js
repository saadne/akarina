const { DataTypes } = require("sequelize");
const db = require("../config/db");


const Store = db.define("Store", {
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
});
db.sync({ alter: true })

module.exports = Store;