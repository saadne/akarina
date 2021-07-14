const { DataTypes } = require("sequelize");
const db = require("../config/db");


const Land = db.define("Land", {
    length: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    papier: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    is_title: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
});
db.sync({ alter: true })

module.exports = Land;