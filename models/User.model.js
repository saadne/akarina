const { DataTypes } = require("sequelize");
const sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const db = require("../config/db");
const House = require("./house.model");
const User = db.define("user", {
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})
User.authenticate = async function (phone, password) {
    const user = await User.findOne({ where: { phone } });
    if (bcrypt.compareSync(password, user.password)) {
        return user.authorize();
    }
    throw new Error('invalid password');
}


db.sync({ alter: true })

module.exports = User