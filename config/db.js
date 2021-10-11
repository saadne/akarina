const { Sequelize } = require("sequelize");
let db;
try {
    db = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER_NAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        // logging:false,
        pool: {
          max: 5,
          min: 0,
          // idle: 300000,
          // acquire: 300000
        },
      }
    );

} catch (error) {
    console.log(error, "ddddddddddddddd")
}

module.exports = db;